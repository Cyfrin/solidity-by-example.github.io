import { Tree, insert, search as _search } from "./prefix-tree"

import INDEX from "../search.json"
import KEYWORDS from "../keywords.json"

const keywords: string[] = []
for (const key of Object.keys(KEYWORDS)) {
    // @ts-ignore
    keywords.push(...KEYWORDS[key])
}

const tree: Tree = {}
for (const keyword of keywords) {
    insert(tree, keyword)
}

export function unique(words: string[]): string[] {
    return Array.from(new Set(words))
}

export function search(word: string): string[] {
    const pages: string[] = []

    const keywords = _search(tree, word.toLowerCase())
    for (const keyword of keywords) {
        // @ts-ignore
        if (INDEX[keyword]) {
            // @ts-ignore
            pages.push(...INDEX[keyword])
        }
    }

    return pages
}
