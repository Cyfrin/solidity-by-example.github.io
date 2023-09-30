import React, { useRef, useLayoutEffect } from "react"
import { useAppContext } from "../contexts/AppContext"
import styles from "./Layout.module.css"
import SideNav from "./SideNav"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { state } = useAppContext()
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (ref.current) {
      // @ts-ignore
      ref.current.scrollTop = sessionStorage.getItem("scroll") || 0
    }
  }, [])

  function onClick(path: string) {
    // @ts-ignore
    sessionStorage.setItem("scroll", ref.current?.scrollTop)
    window.location.href = path
  }

  return (
    <div className={styles.component}>
      <div
        ref={ref}
        className={styles.sideNav}
        style={
          state.sideNav
            ? {
                width: "var(--side-nav-width)",
                padding: "20px 10px 60px 10px",
              }
            : {
                width: 0,
              }
        }
      >
        {state.sideNav ? <SideNav onClick={onClick} /> : null}
      </div>
      <div className={styles.main}>
        <Header />
        <div className={styles.children}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
