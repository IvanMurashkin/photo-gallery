import axios from "axios"

export interface Album {
  id: number
  userId: number
  title: string
}

export interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const JSONPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export class GalleryAPI {
  static getAlbums = async () => {
    try {
      const { data: albums } = await JSONPlaceholder.get<Album[]>("/albums")

      return albums
    } catch (error) {
      throw error
    }
  }

  static getPhotos = async () => {
    try {
      const { data: photos } = await JSONPlaceholder.get<Photo[]>("/photos")

      return photos
    } catch (error) {
      throw error
    }
  }
}
