import fs from "fs"
import path from "path"
import { exists, copy, renderTemplateToFile } from "./lib"
import mdToHtml from "./md-to-html"

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

  // create index.js
  await renderTemplateToFile(
    path.join(__dirname, "./template/index.js.mustache"),
    path.join(dir, `index.js`),
    {
      importPathToExample: getImportPathToExample(dir),
    }
  )

  await copy(
    path.join(__dirname, "./template/index.test.js"),
    path.join(dir, "index.test.js")
  )
}

main()
