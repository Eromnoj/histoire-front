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
}

export type TextFieldProps = {
  id: string
  name: string
  label: string
  value?: string | undefined
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