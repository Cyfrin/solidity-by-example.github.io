import React, { useLayoutEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useAppContext } from "./contexts/AppContext"
import Layout from "./components/Layout"
import routes from "./routes"
import { getPrevNextPaths } from "./nav"

function App() {
  const { state, init } = useAppContext()

  useLayoutEffect(() => {
    init({
      width: window.document.body.clientWidth,
    })
  }, [])

  if (!state.initialized) {
    return null
  }

  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL}>
      <Layout>
        <Routes>
          {routes.map((route) => {
            const { prev, next } = getPrevNextPaths(route.path)
            return (
              <Route
                key={route.path}
                path={route.path}
                element={React.createElement(route.component, {
                  prev,
                  next,
                })}
              />
            )
          })}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
