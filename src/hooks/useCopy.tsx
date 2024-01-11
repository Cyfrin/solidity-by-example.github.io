import { useEffect } from "react"

const COPY_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20" height="20" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /> </svg>'

const CHECK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="20" height="20" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>'

export default function useCopy(deps = []) {
  useEffect(() => {
    const copy = (target: any) => {
      try {
        const textArea = document.createElement("textarea")
        textArea.setAttribute("style", "width:1px;border:0;opacity:0;")
        document.body.appendChild(textArea)

        navigator.clipboard.writeText(target.innerText)

        document.body.removeChild(textArea)
      } catch (error) {
        console.error(error)
      }
    }

    // Create copy button for each pre
    const listeners: Function[] = []
    const pres = document.querySelectorAll("pre")
    pres.forEach((pre) => {
      // Skip if copy button already exists
      if (pre.parentElement?.className == "copy-wrapper") {
        return
      }

      const div = document.createElement("div")
      div.className = "copy-wrapper"
      // insert div before pre
      // @ts-ignore
      pre.parentElement.insertBefore(div, pre)
      // move pre inside div
      div.appendChild(pre)

      // button
      const button = document.createElement("button")
      button.className = "copy"
      button.title = "Copy"
      // button.textContent = "Copy"
      button.innerHTML = COPY_SVG
      // @ts-ignore
      button.ariaLabel = "Copy to clipboard"

      pre.after(button)

      function _copy(e: MouseEvent) {
        e.preventDefault()
        // @ts-ignore
        // NOTE: child 0 = <code>
        copy(pre.childNodes[0])
        button.innerHTML = CHECK_SVG
      }

      function _blur(e: FocusEvent) {
        e.preventDefault()
        button.innerHTML = COPY_SVG
      }

      button.addEventListener("click", _copy)
      button.addEventListener("blur", _blur)

      listeners.push(() => {
        button.removeEventListener("click", _copy)
        button.removeEventListener("blur", _blur)
      })
    })

    return () => {
      for (let i = 0; i < listeners.length; i++) {
        listeners[i]()
      }
    }
  }, deps)
}
