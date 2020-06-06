import fs from "fs"
import path from "path"
import { copy, getExtension } from "./lib"
import mdToHtml from "./md-to-html"
const { readdir } = fs.promises

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
