import { MouseEventHandler } from "react"

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