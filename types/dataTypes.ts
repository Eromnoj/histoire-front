export type BookType = {
  _id: string
  coverPath: string
  title: string
  author: { username: string, description: string, _id: string }[],
  category: string
  avgRate: number
  slug: string
  favorite: boolean
}

export type FilterType = {
  category: string[],
  tags: string[],
  search: string,
  sorted: string,
  page: number
}

export type ChapterType = {
  _id: string,
  title: string,
  chapterOrder: number,
  isPublished: boolean,
  slug?: string
}

export type BookMarkType = {
  chapterId : string,
  bookmark: number
}

export type BookStateType = {
  category: string,
  tags: string[],
  title: string,
  description: string,
  coverPath: string
}

export type EditorChapterType = {
  title: string,
  content: string,
  chapterOrder: number
}


export type BookStoryType = {
  _id: string,
  title: string,
  category: string,
  chaptersTotal: number,
  chaptersPublished: number,
  isPublished: boolean
}

