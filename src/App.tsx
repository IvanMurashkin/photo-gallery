import React, { ReactElement, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import { Albums } from "./components/Albums"
import { Photos } from "./components/Photos"
import { getAlbums } from "./store/album/actions"
import { getPhotos } from "./store/photo/actions"

import style from "./App.module.css"

export const App = (): ReactElement => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlbums())
    dispatch(getPhotos())
  }, [])

  return (
    <div className={style.app}>
      <Switch>
        <Route exact path="/" component={Albums} />
        <Route path="/albums/:albumId/photos" component={Photos} />
      </Switch>
    </div>
  )
}
