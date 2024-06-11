import { Tree, insert, search as _search } from "./prefix-tree"

import INDEX from "../search.json"
import KEYWORDS from "../keywords.json"

const keywords: string[] = []
for (const key of Object.keys(KEYWORDS)) {
  // @ts-ignore
  keywords.push(...KEYWORDS[key])
}

const tree: Tree = {}
for (let i = 0; i < keywords.length; i++) {
  insert(tree, keywords[i])
}

export function unique(words: string[]): string[] {
  return Array.from(new Set(words))
}

export function search(word: string): string[] {
  const ids: string[] = []

  const keywords = _search(tree, word.toLowerCase())
  for (let i = 0; i < keywords.length; i++) {
    const keyword = keywords[i]
    // @ts-ignore
    if (INDEX[keyword]) {
      // @ts-ignore
      ids.push(...INDEX[keyword])
    }
  }

  return ids
}
