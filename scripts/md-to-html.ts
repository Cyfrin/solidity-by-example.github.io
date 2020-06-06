import assert from "assert"
import fs from "fs"
import path from "path"
import yaml from "yaml"
import mustache from "mustache"
import marked from "marked"
import { removeExtension } from "./lib"

const { readFile, writeFile, readdir } = fs.promises

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
  const fileName = removeExtension(filePath.split("/").pop())
  const dir = filePath.split("/").slice(0, -1).join("/")

  // get solidity code
  const solidityFileNames = await findSolidityFiles(dir)

  const codes: Map<string, string> = new Map()
  for (const solFileName of solidityFileNames) {
    const source = (await readFile(path.join(dir, solFileName))).toString()
    codes.set(removeExtension(solFileName), source)
  }

  // render solidity inside markdown
  const md = (await readFile(filePath)).toString()
  const { content, metadata } = parse(md)

  const markdown = mustache.render(content, codes)
  const html = marked(markdown)
    .replace(/&quot;/g, `"`)
    .replace(/\\/g, `\\\\`)

  // render markdown to html
  const jsTemplate = (
    await readFile(path.join(__dirname, "./template/index.html.js.mustache"))
  ).toString()
  const js = mustache.render(jsTemplate, {
    html,
    title: metadata.title,
    version: metadata.version,
    description: metadata.description,
  })

  await writeFile(path.join(dir, `${fileName}.html.js`), js)

  console.log(`${path.join(dir, `${fileName}.html.js`)}`)
}
