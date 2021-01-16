import React, { ReactElement } from "react"
import { AlbumCard } from "./components/AlbumCard"

export const App = (): ReactElement => {
  return (
    <div className="app">
      <AlbumCard />
    </div>
  )
}
