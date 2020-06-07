import assert from "assert"
import fs from "fs"
import mustache from "mustache"
const { access, readFile, writeFile } = fs.promises

export async function exists(filePath: string): Promise<boolean> {
  try {
    await access(filePath)
    return true
  } catch (error) {
    return false
  }
}

export async function copy(fromFilePath: string, toFilePath: string) {
  const file = await readFile(fromFilePath)
  await writeFile(toFilePath, file)
}

export function removeExtension(file: string | undefined): string {
  if (!file) {
    throw new Error(`Failed to remove extension. Invalid file name`)
  }

  return file.split(".").slice(0, -1).join("")
}

export function getExtension(file: string | undefined): string {
  if (!file) {
    throw new Error(`Failed to get extension. Invalid file name`)
  }

  const ext = file.split(".").slice(-1)[0]

  if (!ext) {
    throw new Error(`Failed to get file extension.`)
  }

  return ext
}

export async function renderTemplateToFile(
  templatePath: string,
  writeToPath: string,
  data: {}
): Promise<void> {
  // create index.js
  const template = (await readFile(templatePath)).toString()
  const js = mustache.render(template, data)
  await writeFile(writeToPath, js)

  console.log(`Created ${writeToPath}`)
}
