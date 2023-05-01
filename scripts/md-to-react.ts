import assert from "assert"
import fs from "fs"
import path from "path"
import mustache from "mustache"
import { marked } from "marked"
import hljs from "highlight.js"
// @ts-ignore
import { solidity } from "highlightjs-solidity"
// @ts-ignore
import { exists, removeExt, getExt, renderTemplateToFile, parseYaml } from "./lib"

hljs.registerLanguage("solidity", solidity)
const { readFile, readdir } = fs.promises

async function findSolidityFiles(dir: string): Promise<string[]> {
  const files = await readdir(dir)
  return files.filter((file) => file.split(".").pop() == "sol")
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

  // render Solidity inside markdown
  const { content, metadata } = await parseYaml(filePath)

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
    // replace \ with \\
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
      keywords: metadata.keywords,
      codes: Object.entries(codes).map(([key, val]) => ({
        key: `${key}.sol`,
        // @ts-ignore
        val: Buffer.from(val).toString("base64"),
      })),
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
}

main()
