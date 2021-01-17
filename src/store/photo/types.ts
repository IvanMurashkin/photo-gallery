import { Photo } from "../../api/galleryAPI"
import {
  GET_PHOTOS_ERROR,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_REQUEST,
} from "./actions"

export interface PhotoState {
  items: Photo[]
  isLoading: boolean
  error: Error | null
}

interface GetPhotosRequestAction {
  type: typeof GET_PHOTOS_REQUEST
}

interface GetPhotosSuccessAction {
  type: typeof GET_PHOTOS_SUCCESS
  payload: Photo[]
}

interface GetPhotosErrorAction {
  type: typeof GET_PHOTOS_ERROR
  error: Error
}

export type PhotoActionTypes =
  | GetPhotosRequestAction
  | GetPhotosSuccessAction
  | GetPhotosErrorAction
