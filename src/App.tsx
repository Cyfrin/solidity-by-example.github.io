import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import routes from "./routes"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.component}>
        <Header />
        <div className={styles.main}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact
                component={route.component}
              />
            ))}
          </Switch>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
