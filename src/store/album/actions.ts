import { GalleryAPI } from "./../../api/galleryAPI"
import { AlbumActionTypes } from "./types"
import { Album } from "../../api/galleryAPI"
import { Thunk } from "../store"
export const GET_ALBUMS_REQUEST = "GET_ALBUMS_REQUEST"
export const GET_ALBUMS_SUCCESS = "GET_ALBUMS_SUCCESS"
export const GET_ALBUMS_ERROR = "GET_ALBUMS_ERROR"

const getAlbumsRequest = (): AlbumActionTypes => ({
  type: GET_ALBUMS_REQUEST,
})

const getAlbumsSuccess = (albums: Album[]): AlbumActionTypes => ({
  type: GET_ALBUMS_SUCCESS,
  payload: albums,
})

const getAlbumsError = (error: Error): AlbumActionTypes => ({
  type: GET_ALBUMS_ERROR,
  error,
})

export const getAlbums = (): Thunk => async (dispatch) => {
  try {
    dispatch(getAlbumsRequest())
    const albums = await GalleryAPI.getAlbums()
    dispatch(getAlbumsSuccess(albums))
  } catch (error) {
    dispatch(getAlbumsError(error))
  }
}
