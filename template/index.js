const { toHTML } = require("./lib")

async function main() {
  const args = process.argv.slice(2)
  const dir = args[0] || "."

  await toHTML(dir)
}

main()
