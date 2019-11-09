const path = require("path")
const { toHTML } = require("./template/lib")

const PAGE_DIR = path.join(__dirname, "../src/pages")

async function main() {
  const args = process.argv.slice(2)
  const page = args[0]

  await toHTML(path.join(PAGE_DIR, page))
}

main()
