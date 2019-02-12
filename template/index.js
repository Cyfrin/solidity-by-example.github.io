const fs = require('fs')
const path = require('path')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)

const mustache = require('mustache')
const marked = require('marked')

async function findSolidityFile(dir) {
  const files = await readdir(dir)

  return files.find(file => file.split(".").pop() == "sol")
}

// convert index.md.mustache -> index.html.js
async function main() {
  const args = process.argv.slice(2)
  const dir = args[0] || '.'

  const solidityFileName = await findSolidityFile(dir)

  const code = (await readFile(path.join(dir, solidityFileName))).toString()
  const mdTemplate = (await readFile(path.join(dir, 'index.md.mustache'))).toString()

  const markdown = mustache.render(mdTemplate, { code })
  const html = marked(markdown)

  const jsTemplate = (await readFile(path.join(__dirname, './index.html.js.mustache'))).toString()
  const js = mustache.render(jsTemplate, { html })

  console.log(js)
}

main()
