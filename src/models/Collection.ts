import { ICard } from './Card'

export interface ICollection {
  image: string
  title: string
  content?: string
  cards: ICard[]
}
