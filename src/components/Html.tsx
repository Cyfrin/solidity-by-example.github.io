// @ts-ignore
import hljs from "highlight.js/lib/core"
import "highlight.js/styles/foundation.css"
// @ts-ignore
import hljsDefineSolidity from "highlightjs-solidity"
import React, { useEffect } from "react"

hljsDefineSolidity(hljs)
hljs.initHighlightingOnLoad()

interface Props {
  html: string
}

const Html: React.FC<Props> = ({ html }) => {
  // NOTE: to render hightlighs after page load
  // useEffect(() => {
  //   document.querySelectorAll("pre code").forEach((block) => {
  //     hljs.highlightBlock(block)
  //   })
  // }, [])

  /* Note: Copy button to render inside pre
  <div class="buttons">
    <button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard">
      <i class="tooltiptext"></i>
    </button>
  </div>
  */
  useEffect(() => {
    // Skip creating elements when pre-rendering
    if (navigator.userAgent === "ReactSnap") {
      return
    }

    const copy = (target: any) => {
      const textArea = document.createElement("textarea")
      textArea.setAttribute("style", "width:1px;border:0;opacity:0;")
      document.body.appendChild(textArea)

      textArea.value = target.innerText
      textArea.select()
      document.execCommand("copy")

      document.body.removeChild(textArea)
    }

    const pres = document.querySelectorAll("pre")
    pres.forEach((pre) => {
      // div
      const div = document.createElement("div")
      div.className = "buttons"

      // button
      const button = document.createElement("button")
      button.className = "fa fa-copy clip-button"
      button.title = "Copy to clipboard"
      // @ts-ignore
      button.ariaLabel = "Copy to clipboard"

      const icon = document.createElement("i")
      icon.className = "tooltiptext"
      button.appendChild(icon)

      div.appendChild(button)

      const code = pre.firstChild
      pre.insertBefore(div, code)

      // button on click
      button.addEventListener("click", (e) => {
        e.preventDefault()
        // NOTE:
        // child 0 = <div class="buttons">
        // child 1 = <code>
        copy(pre.childNodes[1])
      })
    })
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default Html
