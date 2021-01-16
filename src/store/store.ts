import { albumReducer } from "./album/reducer"
import { createStore, applyMiddleware, combineReducers, Action } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware, { ThunkAction } from "redux-thunk"

const rootReducer = combineReducers({
  albums: albumReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
)
