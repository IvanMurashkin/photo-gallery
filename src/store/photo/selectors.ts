import { createSelector } from "reselect"
import { RootState } from "../store"

const photoItemsSelector = (state: RootState) => state.photos.items

export const getPhotosByAlbumSelector = (albumId: number) => {
  return createSelector(photoItemsSelector, (photos) =>
    photos.filter((photo) => photo.albumId === albumId),
  )
}
