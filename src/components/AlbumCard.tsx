import React, { ReactElement } from "react"
import { Album } from "../api/galleryAPI"
import { shorten } from "../utils/stringUtils"
import style from "./AlbumCard.module.css"

interface Props {
  album: Album
}

export const AlbumCard = ({ album }: Props): ReactElement => {
  return (
    <div className={style.album}>
      <img
        className={style.album__preview}
        src="https://i.pinimg.com/originals/11/ab/14/11ab147894a7d2ce866ff88a4aa63655.jpg"
        alt="Альбом"
        title={album.title}
      ></img>
      <div className={style.album__info}>
        <span>{shorten(album.title)}</span>
        <span>100</span>
      </div>
    </div>
  )
}
