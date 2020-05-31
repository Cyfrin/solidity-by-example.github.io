const assert = require("assert")
const fs = require("fs")
const path = require("path")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const readdir = util.promisify(fs.readdir)
const yaml = require("yaml")
const mustache = require("mustache")
const marked = require("marked")

function removeExtension(fileName) {
  return fileName.split(".").slice(0, -1).join("")
}

function getExtension(file) {
  return file.split(".").slice(-1)[0]
}

function findIndexOfFrontMatter(lines) {
  assert(lines[0] === "---", "Front matter missing")

  // find front matter
  let i = 1
  while (i < lines.length && lines[i] !== "---") {
    i++
  }

  return i
}

function getMetadata(lines) {
  assert(lines[0] === "---", "Invalid front matter")
  assert(lines[lines.length - 1] === "---", "Invalid front matter")

  return yaml.parse(lines.slice(1, -1).join("\n"))
}

function parse(file) {
  const lines = file.split("\n")

  const i = findIndexOfFrontMatter(lines)

  const metadata = getMetadata(lines.slice(0, i + 1))
  const content = lines.slice(i + 1).join("\n")

  return {
    metadata,
    content,
  }
}

async function findSolidityFiles(dir) {
  const files = await readdir(dir)

  return files.filter((file) => file.split(".").pop() == "sol")
}

// convert index.md -> index.html.js
async function toHTML(filePath) {
  const fileName = removeExtension(filePath.split("/").pop())
  const dir = filePath.split("/").slice(0, -1).join("/")

  // get solidity code
  const solidityFileNames = await findSolidityFiles(dir)

  const codes = {}
  for (const solFileName of solidityFileNames) {
    codes[removeExtension(solFileName)] = (
      await readFile(path.join(dir, solFileName))
    ).toString()
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

  writeFile(path.join(dir, `${fileName}.html.js`), js)

  console.log(`${path.join(dir, `${fileName}.html.js`)}`)
}

module.exports = {
  toHTML,
  getExtension,
  removeExtension,
}
