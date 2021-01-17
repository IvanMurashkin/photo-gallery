import { GalleryAPI, Photo } from "./../../api/galleryAPI"
import { PhotoActionTypes } from "./types"
import { Thunk } from "../store"
export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST"
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS"
export const GET_PHOTOS_ERROR = "GET_PHOTOS_ERROR"

const getPhotosRequest = (): PhotoActionTypes => ({
  type: GET_PHOTOS_REQUEST,
})

const getPhotosSuccess = (photos: Photo[]): PhotoActionTypes => ({
  type: GET_PHOTOS_SUCCESS,
  payload: photos,
})

const getPhotosError = (error: Error): PhotoActionTypes => ({
  type: GET_PHOTOS_ERROR,
  error,
})

export const getPhotos = (): Thunk => async (dispatch) => {
  try {
    dispatch(getPhotosRequest())
    const photos = await GalleryAPI.getPhotos()
    dispatch(getPhotosSuccess(photos))
  } catch (error) {
    dispatch(getPhotosError(error))
  }
}
