import fs from "fs"
import assert from "assert"
import path from "path"

import { copy, getFiles } from "./lib"

async function cp(src: string) {
  const dst = path.join(__dirname, "..", "src/pages")
  const files = await getFiles(src, /\.sol$/)

  for (const file of files) {
    const [_, relative_path] = file.split(src)
    assert(relative_path, "empty relative path")
    await copy(file, path.join(dst, relative_path))
  }
}

async function main() {
  await cp(path.join(__dirname, "..", "contracts/src"))
  await cp(path.join(__dirname, "..", "contracts/tests"))
}

main()
