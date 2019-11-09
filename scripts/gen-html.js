const path = require("path")
const fs = require("fs")
const util = require("util")
const readdir = util.promisify(fs.readdir)
const { toHTML } = require("../template/lib")

const PAGE_DIR = path.join(__dirname, "../src/pages")

async function main() {
  const pages = await readdir(PAGE_DIR)

  for (const page of pages) {
    if (page == "Home") {
      continue
    }

    await toHTML(path.join(PAGE_DIR, page))
  }
}

main()
