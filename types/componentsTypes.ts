import { ChangeEventHandler, MouseEventHandler } from "react"

export type BookProps = {
  id: string
  picture: string
  title: string
  author: string
  category: string
  rating: number
  favorite: boolean
}

export type BookMinProps = {
  id: string
  title: string
  total: number
  published: number
  category: string
}

export type ChapterProps = {
  id : string
  title: string
  isPublish: boolean
  onClickStatus: MouseEventHandler
  onClickMod: MouseEventHandler
  onClickDel: MouseEventHandler
}

export type NavArrowProps = {
  direction : string
  onClick : MouseEventHandler
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
  onChange : ChangeEventHandler
}

export type SelectProps = {
  id: string
  name: string
  options : OptionProps[]
}

export type OptionProps = {
  _id: string
  chapterName: string
}

export type TextAreaProps = {
  id: string
  name: string
  label: string
  value?: string | undefined
  rows : number
  onChange : ChangeEventHandler
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