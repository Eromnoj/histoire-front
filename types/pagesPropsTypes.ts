import type { ChapterType } from "./dataTypes"

export type AuthorProps = {
  data: {
    _id: string
    email: string
    twitter: string
    facebook: string
    description: string
    imgPath: string
    username: string
    books: { category: string, favorite: boolean, _id: string, coverPath: string, title: string , avgRate: number[], slug: string}[]
  }
}

export type BookDescProps = {
  data: {
    _id: string
    tags: string[]
    description: string
    coverPath: string
    title: string
    author: { username: string, description: string, _id: string, imgPath: string }[]
    category: string
    avgRate: number
    favorite: boolean
    chapters: ChapterType[]
  }
}

export type ReaderProps = {
  data: {
    _id: string,
    title: string,
    chapterOrder: number,
    isPublished: boolean,
    content: string,
    slug: string
  }
}