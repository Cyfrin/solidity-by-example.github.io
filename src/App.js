import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import routes from "./routes"

function App(props) {
  return (
    <div className={styles.component}>
      <Header />
      <div className={styles.main}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default App
