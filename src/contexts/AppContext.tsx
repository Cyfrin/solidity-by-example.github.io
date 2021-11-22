import React, { useState, createContext, useContext, useMemo } from "react"

const LOCAL_STORAGE_KEY = "sol"

export type Mode = "light" | "dark"

interface AppState {
  mode: Mode
}

const INITIAL_STATE: AppState = {
  // TODO: system default mode, listen for system preference
  mode: "light",
}

const AppContext = createContext({
  state: INITIAL_STATE,
  setMode: (mode: Mode) => {},
  loadLocalStorage: () => {},
})

export function useAppContext() {
  return useContext(AppContext)
}

function _saveToLocalStorage(state: AppState) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error(error)
  }
}

interface Props {}

export const Provider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE)

  function loadLocalStorage() {
    try {
      // @ts-ignore
      const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

      const mode = data?.mode || "light"
      if (mode == "light") {
        document.body.classList.remove("dark")
      } else {
        document.body.classList.add("dark")
      }

      setState((state) => ({
        ...state,
        ...data,
        mode,
      }))
    } catch (error) {
      console.error(error)
    }
  }

  function setMode(mode: Mode) {
    if (mode == "light") {
      document.body.classList.remove("dark")
    } else {
      document.body.classList.add("dark")
    }

    const newState = {
      ...state,
      mode,
    }

    setState(newState)
    _saveToLocalStorage(newState)
  }

  return (
    <AppContext.Provider
      value={useMemo(
        () => ({
          state,
          loadLocalStorage,
          setMode,
        }),
        [state]
      )}
    >
      {children}
    </AppContext.Provider>
  )
}
