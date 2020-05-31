const fs = require("fs")
const util = require("util")

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

async function copy(fromFilePath, toFilePath) {
  const file = await readFile(fromFilePath)
  await writeFile(toFilePath, file)
}

function removeExtension(fileName) {
  return fileName.split(".").slice(0, -1).join("")
}

function getExtension(file) {
  return file.split(".").slice(-1)[0]
}

module.exports = {
  removeExtension,
  getExtension,
  copy,
}
