const path = require("path")
const fs = require("fs")
const util = require("util")
const readdir = util.promisify(fs.readdir)
const stat = util.promisify(fs.stat)
const copyFile = util.promisify(fs.copyFile)

const CONTRACT_DIR = path.join(__dirname, "../contracts/contracts/examples")
const PAGE_DIR = path.join(__dirname, "../src/pages")

async function main() {
  console.log(`Copying files from ${CONTRACT_DIR}`)

  const contracts = await readdir(CONTRACT_DIR)
  const pages = await readdir(PAGE_DIR)

  for (const contract of contracts) {
    const contractName = contract.split(".")[0]
    const pagePath = path.join(PAGE_DIR, contractName)

    // check if directory exists
    const res = await stat(pagePath)
    if (!res.isDirectory()) {
      throw new Error(`Directory does not exist: ${pagePath}`)
    }

    // copy from truffle contracts to pages
    const contractPath = path.join(CONTRACT_DIR, contract)
    const newPath = path.join(pagePath, contract)
    console.log(`copying ${contract}`)

    await copyFile(contractPath, newPath)
  }
}

main()
