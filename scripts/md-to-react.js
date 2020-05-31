const fs = require("fs")
const util = require("util")
const path = require("path")
const readdir = util.promisify(fs.readdir)
const { copy, getExtension } = require("./lib")
const mdToHtml = require("./md-to-html")

async function main() {
  const args = process.argv.slice(2)
  const dir = args[0]

  const files = (await readdir(dir)).filter(
    (file) => getExtension(file) === "md"
  )

  for (const file of files) {
    await mdToHtml(path.join(dir, file))
    await copy(
      path.join(__dirname, "./template/index.js"),
      path.join(dir, "index.js")
    )
    await copy(
      path.join(__dirname, "./template/index.test.js"),
      path.join(dir, "index.test.js")
    )
  }
}

main()
