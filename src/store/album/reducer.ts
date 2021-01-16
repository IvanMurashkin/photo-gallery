import {
  GET_ALBUMS_ERROR,
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
} from "./actions"
import { AlbumActionTypes, AlbumState } from "./types"

const initialState: AlbumState = {
  items: [],
  isLoading: false,
  error: null,
}

export const albumReducer = (
  state = initialState,
  action: AlbumActionTypes,
): AlbumState => {
  switch (action.type) {
    case GET_ALBUMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      }
    case GET_ALBUMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
