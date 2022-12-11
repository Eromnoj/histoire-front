import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react"

export type BookProps = {
  id: string
  picture: string
  title: string
  author: string
  authorId: string
  category: string
  rating: number
  favorite: boolean
  slug?: string | undefined
  favClick: MouseEventHandler
}

export type BookMinProps = {
  id: string
  title: string
  total: number
  published: number
  category: string
  isPublished: boolean
}

export type ChapterProps = {
  id : string
  title: string
  isPublish: boolean
}

export type NavArrowProps = {
  direction : string
  onClick : MouseEventHandler
  style? : {}
}

export type ToastProps = {
  message: string,
  click: MouseEventHandler
}

export type SocialLinkProps = {
  twitter?: string
  facebook?: string
  email?: string
}

//form Components

export type TagProps = {
  name : string
  isSelected : boolean
  onClick : MouseEventHandler
}

export type CheckerProps = {
  id: string
  name: string
  label: string
}

export type RadioProps = {
  id: string
  name: string
  label: string
}


export type SubmitButtonProps = {
  name: string
  onClick? : MouseEventHandler
}

export type TextFieldProps = {
  id: string
  name: string
  type?: string
  label: string
  value?: string | undefined
  onChange : FormEventHandler<HTMLInputElement>
}

export type SelectProps = {
  id: string
  name: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  options : OptionProps[]
}

export type OptionProps = {
  _id?: string
  chapterName: string
}

export type TextAreaProps = {
  id: string
  name: string
  label: string
  value?: string | undefined
  rows : number
  onChange :  FormEventHandler<HTMLTextAreaElement>
}


//avatar

export type AuthorAvatarProps = {
  id: string
  imgUrl: string
  name: string
}

//storyLink

export type StoryLinkProps = {
  id: string
  name: string
  category: string
  onClick: MouseEventHandler
}

//

export type TagSelectorProps = {
  method: string
}