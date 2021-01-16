import React, { ReactElement } from "react"
import { Albums } from "./components/Albums"

export const App = (): ReactElement => {
  return (
    <div className="app">
      <div></div>
      <Albums />
    </div>
  )
}
