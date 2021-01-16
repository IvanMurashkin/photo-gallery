import React, { ReactElement, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAlbums } from "../store/album/actions"
import { RootState } from "../store/store"
import { AlbumCard } from "./AlbumCard"
import style from "./Albums.module.css"

export const Albums = (): ReactElement => {
  const albums = useSelector((state: RootState) => state.albums)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlbums())
  }, [])

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
