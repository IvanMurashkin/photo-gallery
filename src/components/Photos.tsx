import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getPhotosByAlbumSelector } from "../store/photo/selectors"
import { ReactComponent as ArrowBackSvg } from "../assets/icons/arrow-back.svg"
import style from "./Photos.module.css"

export const Photos = (): ReactElement => {
  const { albumId } = useParams<{ albumId: string | undefined }>()

  const photos = useSelector(
    getPhotosByAlbumSelector(parseInt(albumId as string)),
  )

  return (
    <div className={style.photos_wrapper}>
      <Link to="/" className={style.back_link}>
        <ArrowBackSvg />
      </Link>
      <div className={style.photos}>
        {photos.map((photo) => (
          <img
            src={photo.thumbnailUrl}
            alt="Фото"
            title={photo.title}
            className={style.photo}
          />
        ))}
      </div>
    </div>
  )
}
