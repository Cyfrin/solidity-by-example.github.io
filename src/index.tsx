import React from "react"
import { hydrateRoot, createRoot } from "react-dom/client"
import "./index.css"
import { Provider as AppContextProvider } from "./contexts/AppContext"
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container!)

const rootElement = document.getElementById("root")
// @ts-ignore
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement!,
    <AppContextProvider>
      <App />
    </AppContextProvider>,
  )
} else {
  root.render(
    <AppContextProvider>
      <App />
    </AppContextProvider>,
  )
}
