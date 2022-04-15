import React, { useState, createContext, useContext, useMemo } from "react"

export type Theme = "light" | "dark"

interface AppState {
  theme: Theme
  loading: boolean
}

const INITIAL_STATE: AppState = {
  theme: "light",
  loading: true,
}

const AppContext = createContext({
  state: INITIAL_STATE,
  setTheme: (theme: Theme) => {},
  loadLocalStorage: () => {},
})

export function useAppContext() {
  return useContext(AppContext)
}

function _saveToLocalStorage(theme: Theme) {
  try {
    localStorage.setItem("theme", theme)
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

  function loadLocalStorage() {
    try {
      // @ts-ignore
      const theme: Theme = localStorage.getItem("theme") || "light"

      _setTheme(theme)

      setState((state) => ({
        ...state,
        theme,
      }))
    } catch (error) {
      console.error(error)
    }

    setState((state) => ({
      ...state,
      loading: false,
    }))
  }

  function setTheme(theme: Theme) {
    _setTheme(theme)
    setState({ ...state, theme })
    _saveToLocalStorage(theme)
  }

  return (
    <AppContext.Provider
      value={useMemo(
        () => ({
          state,
          loadLocalStorage,
          setTheme,
        }),
        [state]
      )}
    >
      {children}
    </AppContext.Provider>
  )
}
