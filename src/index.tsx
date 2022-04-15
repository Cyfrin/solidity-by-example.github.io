import React from "react"
import { hydrateRoot, createRoot } from "react-dom/client"
import "./index.css"
import { Provider as AppContextProvider } from "./contexts/AppContext"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

const container = document.getElementById("root")
const root = createRoot(container!)

const rootElement = document.getElementById("root")
// @ts-ignore
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement!,
    <AppContextProvider>
      <App />
    </AppContextProvider>
  )
} else {
  root.render(
    <AppContextProvider>
      <App />
    </AppContextProvider>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
