import React, { useState, createContext, useContext, useMemo } from "react"

export type Theme = "light" | "dark"

interface State {
  theme: Theme
  sideNav: boolean
  initialized: boolean
}

const INITIAL_STATE: State = {
  theme: "light",
  sideNav: true,
  initialized: false,
}

const AppContext = createContext({
  state: INITIAL_STATE,
  init: (params: { width: number }) => {},
  setTheme: (theme: Theme) => {},
  toggleSideNav: () => {},
})

export function useAppContext() {
  return useContext(AppContext)
}

function _saveToLocalStorage(key: string, val: any) {
  try {
    localStorage.setItem(key, val)
  } catch (error) {
    console.error(error)
  }
}

interface Props {
  children?: React.ReactNode
}

export const Provider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE)

  function _setTheme(theme: Theme) {
    if (theme == "dark") {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
  }

  function init(params: { width: number }) {
    try {
      // @ts-ignore
      const theme: Theme = localStorage.getItem("theme") || "light"
      let sideNav = params.width >= 500
      {
        const val = localStorage.getItem("sideNav")
        if (val) {
          sideNav = val == "true"
        }
      }

      _setTheme(theme)

      setState((state) => ({
        ...state,
        theme,
        sideNav,
      }))
    } catch (error) {
      console.error(error)
    }

    setState((state) => ({
      ...state,
      initialized: true,
    }))
  }

  function setTheme(theme: Theme) {
    _setTheme(theme)
    setState({ ...state, theme })
    _saveToLocalStorage("theme", theme)
  }

  function toggleSideNav() {
    const sideNav = !state.sideNav
    setState({ ...state, sideNav })
    _saveToLocalStorage("sideNav", sideNav)
  }

  return (
    <AppContext.Provider
      value={useMemo(
        () => ({
          state,
          init,
          setTheme,
          toggleSideNav,
        }),
        [state],
      )}
    >
      {children}
    </AppContext.Provider>
  )
}
