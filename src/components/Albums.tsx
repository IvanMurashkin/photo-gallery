import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../store/store"
import { AlbumCard } from "./AlbumCard"
import style from "./Albums.module.css"

export const Albums = (): ReactElement => {
  const albums = useSelector((state: RootState) => state.albums)

  return (
    <div className={style.albums}>
      {albums.isLoading ? (
        <span>Loading...</span>
      ) : (
        albums.items.map((album) => <AlbumCard key={album.id} album={album} />)
      )}
    </div>
  )
}
