import React, { ReactElement } from "react"
import { AlbumCard } from "./AlbumCard"
import style from "./Albums.module.css"

export const Albums = (): ReactElement => {
  return (
    <div className={style.albums}>
      {new Array(10).fill("").map(() => (
        <AlbumCard />
      ))}
    </div>
  )
}
