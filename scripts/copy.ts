import fs from "fs"
import assert from "assert"
import path from "path"

import { copy, getFiles } from "./lib"

async function cp(src: string) {
  const dst = path.join(__dirname, "..", "src/pages")
  const files = await getFiles(src, /\.sol$/)

  for (const file of files) {
    const [_, relativePath] = file.split(src)
    assert(relativePath, "empty relative path")
    await copy(file, path.join(dst, relativePath))
  }
}

async function main() {
  await cp(path.join(__dirname, "..", "contracts/src"))
  await cp(path.join(__dirname, "..", "contracts/tests"))
}

main()
