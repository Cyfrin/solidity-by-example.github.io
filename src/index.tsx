import React from "react"
import { hydrate, render } from "react-dom"
import "./index.css"
import { Provider as AppContextProvider } from "./contexts/AppContext"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

const rootElement = document.getElementById("root")
// @ts-ignore
if (rootElement.hasChildNodes()) {
  hydrate(
    <AppContextProvider>
      <App />
    </AppContextProvider>,
    rootElement
  )
} else {
  render(
    <AppContextProvider>
      <App />
    </AppContextProvider>,
    rootElement
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
