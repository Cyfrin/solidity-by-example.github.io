const fs = require("fs")
const path = require("path")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const readdir = util.promisify(fs.readdir)

const mustache = require("mustache")
const marked = require("marked")

function removeExtension(fileName) {
  return fileName.split(".").slice(0, -1).join("")
}

function getExtension(file) {
  return file.split(".").slice(-1)[0]
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
  const mdTemplate = (await readFile(filePath)).toString()

  const markdown = mustache.render(mdTemplate, codes)
  const html = marked(markdown)
    .replace(/&quot;/g, `"`)
    .replace(/\\/g, `\\\\`)

  // render markdown to html
  const jsTemplate = (
    await readFile(path.join(__dirname, "./template/index.html.js.mustache"))
  ).toString()
  const js = mustache.render(jsTemplate, { html })

  writeFile(path.join(dir, `${fileName}.html.js`), js)

  console.log(`${path.join(dir, `${fileName}.html.js`)}`)
}

module.exports = {
  toHTML,
  getExtension,
  removeExtension,
}
