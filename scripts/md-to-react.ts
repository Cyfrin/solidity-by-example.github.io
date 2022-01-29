import assert from "assert"
import fs from "fs"
import path from "path"
import yaml from "yaml"
import mustache from "mustache"
import { marked } from "marked"
import hljs from "highlight.js"
// @ts-ignore
import { solidity } from "highlightjs-solidity"
import { exists, copy, removeExt, getExt, renderTemplateToFile } from "./lib"

hljs.registerLanguage("solidity", solidity)
const { readFile, readdir } = fs.promises

function findIndexOfFrontMatter(lines: string[]): number {
  assert(lines[0] === "---", "Front matter missing")

  // find front matter
  let i = 1
  while (i < lines.length && lines[i] !== "---") {
    i++
  }

  return i
}

interface Metadata {
  title: string
  description: string
  version: string
}

function getMetadata(lines: string[]): Metadata {
  assert(lines[0] === "---", "Invalid front matter")
  assert(lines[lines.length - 1] === "---", "Invalid front matter")

  const { title, description, version } = yaml.parse(lines.slice(1, -1).join("\n"))

  return { title, description, version }
}

function parse(file: string): { content: string; metadata: Metadata } {
  const lines = file.split("\n")

  const i = findIndexOfFrontMatter(lines)

  const metadata = getMetadata(lines.slice(0, i + 1))
  const content = lines.slice(i + 1).join("\n")

  return {
    metadata,
    content,
  }
}

async function findSolidityFiles(dir: string): Promise<string[]> {
  const files = await readdir(dir)

  return files.filter((file) => file.split(".").pop() === "sol")
}

async function mdToHtml(filePath: string) {
  const folders = filePath.split("/")
  const tail = folders.pop()

  const ext = getExt(tail)
  assert(ext === "md", `Expected md file, got ${tail}`)

  const fileName = removeExt(tail)
  const dir = folders.join("/")

  // get solidity code
  const solidityFileNames = await findSolidityFiles(dir)

  const codes = {}
  for (const solFileName of solidityFileNames) {
    const source = (await readFile(path.join(dir, solFileName))).toString()
    // @ts-ignore
    codes[removeExt(solFileName)] = source
  }

  // render solidity inside markdown
  const md = (await readFile(filePath)).toString()
  const { content, metadata } = parse(md)

  const markdown = mustache.render(content, codes)
  const html = marked(markdown, {
    highlight: (code, language) => {
      if (language === "solidity") {
        return hljs.highlight(code, { language }).value
      }
      return code
    },
  })
    .replace(/&quot;/g, `"`)
    .replace(/\\/g, `\\\\`)

  // render markdown to html
  await renderTemplateToFile(
    path.join(__dirname, "./template/index.html.ts.mustache"),
    path.join(dir, `${fileName}.html.ts`),
    {
      html,
      title: metadata.title,
      version: metadata.version,
      description: metadata.description,
    }
  )
}

function getImportPathToExample(dir: string): string {
  const folders = dir.split("/")

  const start = folders.findIndex((folder) => folder === "src")
  if (start === -1) {
    throw new Error(`Cannot find src`)
  }

  const depth = folders.length - (start + 1)

  return path.join("../".repeat(depth), "components/Example")
}

function removeTrailingSlash(dir: string): string {
  if (dir[dir.length - 1] === "/") {
    return dir.slice(0, -1)
  }
  return dir
}

async function main() {
  const args = process.argv.slice(2)
  const dir = removeTrailingSlash(args[0])

  const mdPath = path.join(dir, "index.md")

  if (!(await exists(mdPath))) {
    console.log(`Skip ${mdPath} does not exist`)
    return
  }

  await mdToHtml(mdPath)

  // create index.tsx
  await renderTemplateToFile(
    path.join(__dirname, "./template/index.tsx.mustache"),
    path.join(dir, `index.tsx`),
    {
      importPathToExample: getImportPathToExample(dir),
    }
  )

  await copy(
    path.join(__dirname, "./template/index.test.tsx"),
    path.join(dir, "index.test.tsx")
  )
}

main()
