import axios from "axios"

export interface Album {
  id: number
  userId: number
  title: string
}

const JSONPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export const getAlbums = async (page = 1) => {
  try {
    const { data: albums } = await JSONPlaceholder.get<Album[]>(
      `/albums?_page=${page}`,
    )

    return albums
  } catch (error) {
    throw error
  }
}
