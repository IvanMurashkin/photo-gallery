import {
  GET_PHOTOS_ERROR,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
} from "./actions"
import { PhotoActionTypes, PhotoState } from "./types"

const initialState: PhotoState = {
  items: [],
  isLoading: false,
  error: null,
}

export const photoReducer = (
  state = initialState,
  action: PhotoActionTypes,
): PhotoState => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      }
    case GET_PHOTOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
