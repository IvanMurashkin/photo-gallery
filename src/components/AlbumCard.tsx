import React, { ReactElement } from "react"
import style from "./AlbumCard.module.css"

export const AlbumCard = (): ReactElement => {
  return (
    <div className={style.album}>
      <img
        className={style.album__preview}
        src="https://i.pinimg.com/originals/11/ab/14/11ab147894a7d2ce866ff88a4aa63655.jpg"
        alt="Альбом"
      />
      <div className={style.album__info}>
        <span>Dcfkmg fklmsd</span>
        <span>100</span>
      </div>
    </div>
  )
}
