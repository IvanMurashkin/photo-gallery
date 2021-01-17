import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPhotosByAlbumSelector } from "../store/photo/selectors"

export const Photos = (): ReactElement => {
  const { albumId } = useParams<{ albumId: string | undefined }>()

  const photos = useSelector(
    getPhotosByAlbumSelector(parseInt(albumId as string)),
  )

  return (
    <div>
      {photos.map((photo) => (
        <img src={photo.thumbnailUrl} alt="Фото" title={photo.title} />
      ))}
    </div>
  )
}
