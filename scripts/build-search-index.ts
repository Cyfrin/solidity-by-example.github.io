import fs from "fs"
import assert from "assert"
import path from "path"
import { getFiles, parseYaml, buildRoute } from "./lib"
const { writeFile } = fs.promises

async function main() {
  const SEARCH_OUT_PATH = path.join(__dirname, "..", "src/search.json")
  const KEY_OUT_PATH = path.join(__dirname, "..", "src/keywords.json")

  const files = await getFiles(
    path.join(__dirname, "..", "src/pages"),
    new RegExp("index.md"),
  )

  // keyword => pages
  // Create object without constructor
  const index: { [key: string]: string[] } = Object.create(null)

  // route => keywords
  const keys: { [key: string]: string[] } = {}

  for (const file of files) {
    const route = buildRoute(file.split("/"))

    const {
      metadata: { keywords },
    } = await parseYaml(file)

    assert(keywords.length > 0, "keywords = []")

    for (const keyword of keywords) {
      // object has constructor property so check if key is array
      if (!(index[keyword]?.length > 0)) {
        index[keyword] = []
      }
      index[keyword].push(route)
    }

    keys[route] = keywords
  }

  await writeFile(SEARCH_OUT_PATH, JSON.stringify(index, null, 2))
  console.log(`File saved to ${SEARCH_OUT_PATH}`)

  await writeFile(KEY_OUT_PATH, JSON.stringify(keys, null, 2))
  console.log(`File saved to ${KEY_OUT_PATH}`)
}

main()
