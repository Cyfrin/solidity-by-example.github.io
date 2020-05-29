import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home_ver_0_5 from "./pages/0.5/Home"
import routes_ver_0_5 from "./pages/0.5/routes"
import Home_ver_0_6 from "./pages/0.6/Home"
import routes_ver_0_6 from "./pages/0.6/routes"

function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.component}>
        <Header />
        <div className={styles.main}>
          <Switch>
            {routes_ver_0_5.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route path="/0.5" component={Home_ver_0_5} />
            {routes_ver_0_6.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route path="/0.6" component={Home_ver_0_6} />
            <Redirect path="/" to="/0.6" />
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
