import { Album } from "../../api/galleryAPI"
import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
} from "./actions"

export interface AlbumState {
  items: Album[]
  isLoading: boolean
  error: Error | null
}

interface GetAlbumsRequestAction {
  type: typeof GET_ALBUMS_REQUEST
}

interface GetAlbumsSuccessAction {
  type: typeof GET_ALBUMS_SUCCESS
  payload: Album[]
}

interface GetAlbumsErrorAction {
  type: typeof GET_ALBUMS_ERROR
  error: Error
}

export type AlbumActionTypes =
  | GetAlbumsErrorAction
  | GetAlbumsRequestAction
  | GetAlbumsSuccessAction
