import axios from "axios"

export interface Album {
  id: number
  userId: number
  title: string
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
}
