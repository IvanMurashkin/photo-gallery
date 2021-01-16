import React, { ReactElement, useEffect, useState } from "react"
import { Album, getAlbums } from "../api/albumAPI"
import { AlbumCard } from "./AlbumCard"
import style from "./Albums.module.css"

export const Albums = (): ReactElement => {
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    getAlbums().then((response) => setAlbums(response))
  }, [])

  return (
    <div className={style.albums}>
      {albums.map(() => (
        <AlbumCard />
      ))}
    </div>
  )
}
