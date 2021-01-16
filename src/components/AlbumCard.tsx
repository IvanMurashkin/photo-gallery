import React, { ReactElement } from "react"
import style from "./AlbumCard.module.css"

export const AlbumCard = (): ReactElement => {
  return (
    <div className={style.album}>
      <img className={style.album__preview} src="" alt="Альбом" />
      <div className={style.album__info}>
        <span>Dcfkmg fklmsd</span>
        <span>100</span>
      </div>
    </div>
  )
}
