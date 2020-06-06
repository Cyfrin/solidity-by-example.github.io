import assert from "assert"
import fs from "fs"
import path from "path"
import yaml from "yaml"
import mustache from "mustache"
import marked from "marked"
import { removeExtension, getExtension, renderTemplateToFile } from "./lib"

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

  const { title, description, version } = yaml.parse(
    lines.slice(1, -1).join("\n")
  )

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

// convert index.md -> index.html.js
export default async function mdToHtml(filePath: string) {
  const folders = filePath.split("/")
  const tail = folders.pop()

  const ext = getExtension(tail)
  assert(ext === "md", `Expected md file, got ${tail}`)

  const fileName = removeExtension(tail)
  const dir = folders.slice(0, -1).join("/")

  // get solidity code
  const solidityFileNames = await findSolidityFiles(dir)

  const codes = {}
  for (const solFileName of solidityFileNames) {
    const source = (await readFile(path.join(dir, solFileName))).toString()
    // @ts-ignore
    codes[removeExtension(solFileName)] = source
  }

  // render solidity inside markdown
  const md = (await readFile(filePath)).toString()
  const { content, metadata } = parse(md)

  const markdown = mustache.render(content, codes)
  const html = marked(markdown)
    .replace(/&quot;/g, `"`)
    .replace(/\\/g, `\\\\`)

  // render markdown to html
  await renderTemplateToFile(
    path.join(__dirname, "./template/index.html.js.mustache"),
    path.join(dir, `${fileName}.html.js`),
    {
      html,
      title: metadata.title,
      version: metadata.version,
      description: metadata.description,
    }
  )
}
