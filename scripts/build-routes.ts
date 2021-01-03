import fs from "fs"
import assert from "assert"
import path from "path"
import mustache from "mustache"

const { readdir, stat, readFile, writeFile } = fs.promises

interface Route {
  routePath: string
  importPath: string
  componentName: string
}

function buildRoutePath(folders: string[]) {
  const routePath = ["/"]

  // ignore path up to /pages
  const start = folders.findIndex((file) => file === "pages")
  assert(start > 0, `Cannot find pages folder`)

  for (let i = start + 1; i < folders.length; i++) {
    const file = folders[i]

    // ignore index.tsx
    if (file === "index.tsx") {
      continue
    }

    routePath.push(file)
  }

  return path.join(...routePath)
}

// build import path relative to src
function buildImportPath(folders: string[]) {
  const importPath = ["."]

  const start = folders.findIndex((file) => file === "src")
  assert(start > 0, `Cannot find pages folder`)

  for (let i = start + 1; i < folders.length; i++) {
    const file = folders[i]

    // ignore index.tsx
    if (file === "index.tsx") {
      continue
    }

    importPath.push(file)
  }

  return importPath.join("/")
}

function getComponentName(routePath: string): string {
  return `component${routePath.replace(/[/.-]/g, "_")}`
}

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
  const dir = path.join(__dirname, "..", "src")

  const files = await getFiles()

  const routes: Route[] = files.map((file) => {
    const folders = file.split("/")

    const routePath = buildRoutePath(folders)

    return {
      routePath: routePath === "/" ? "" : routePath,
      importPath: buildImportPath(folders),
      componentName: getComponentName(routePath),
    }
  })

  // reverse to put home page at bottom
  routes.reverse()

  const template = (
    await readFile(path.join(__dirname, "template", "routes.tsx.mustache"))
  ).toString()
  const ts = mustache.render(template, {
    routes,
  })

  writeFile(path.join(dir, `routes.tsx`), ts)

  console.log(`${path.join(dir, `routes.tsx`)}`)
}

main()
