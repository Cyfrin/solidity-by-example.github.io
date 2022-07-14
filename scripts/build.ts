// Script to build production html
// Copies build/index.html to each route

import fs from "fs"
import assert from "assert"
import path from "path"

const { readdir, stat, readFile, writeFile } = fs.promises

async function getFiles(): Promise<string[]> {
  // traverse
  const queue = [path.join(__dirname, "..", "src/pages")]

  const files: string[] = []
  while (true) {
    const dir = queue.pop()

    if (!dir) {
      break
    }

    const dirs = await readdir(dir)

    for (const fileName of dirs) {
      const filePath = path.join(dir, fileName)

      const fileStat = await stat(filePath)

      if (fileStat.isDirectory()) {
        queue.push(filePath)
      } else if (fileName === "index.tsx") {
        files.push(filePath)
      }
    }
  }

  return files
}

async function main() {
  const BUILD_DIR = path.join(__dirname, "..", "build")
  const index = (await readFile(path.join(BUILD_DIR, "index.html"))).toString()

  const files = await getFiles()

  const routes = []
  for (const file of files) {
    const path = file.split("/").reverse()
    assert(path[0] == "index.tsx")

    const i = path.findIndex((p) => p == "pages")
    assert(i > 0)

    routes.push(path.slice(1, i).reverse())
  }

  for (const route of routes) {
    const dir = path.join(BUILD_DIR, ...route)

    if (dir == ".") {
      continue
    }

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    console.log(dir)
    await writeFile(path.join(dir, "index.html"), index)
  }
}

main()
