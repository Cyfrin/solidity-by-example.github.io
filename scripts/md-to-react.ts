import fs from "fs"
import path from "path"
import { copy, renderTemplateToFile } from "./lib"
import mdToHtml from "./md-to-html"

function getImportExamplePath(dir: string): string {
  const folders = dir.split("/")

  const start = folders.findIndex((folder) => folder === "src")
  if (start === -1) {
    throw new Error(`Cannot find src`)
  }

  const depth = folders.length - (start + 1)

  return path.join("../".repeat(depth), "components/Example")
}

async function main() {
  const args = process.argv.slice(2)
  const dir = args[0]

  await mdToHtml(path.join(dir, "index.md"))

  // create index.js
  await renderTemplateToFile(
    path.join(__dirname, "./template/index.js.mustache"),
    path.join(dir, `index.js`),
    {
      importExamplePath: getImportExamplePath(dir),
    }
  )

  await copy(
    path.join(__dirname, "./template/index.test.js"),
    path.join(dir, "index.test.js")
  )
}

main()
