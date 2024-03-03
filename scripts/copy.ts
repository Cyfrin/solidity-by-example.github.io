import fs from "fs"
import assert from "assert"
import path from "path"

import { copy, get_files } from "./lib"

async function main() {
  const src = path.join(__dirname, "..", "contracts/src")
  const dst = path.join(__dirname, "..", "src/pages")
  const files = await get_files(src, /\.sol$/)

  for (const file of files) {
    const [_, relative_path] = file.split(src)
    assert(relative_path, "empty relative path")
    await copy(file, path.join(dst, relative_path))
  }
}

main()
