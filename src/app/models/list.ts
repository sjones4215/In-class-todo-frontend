import { Card } from './card'


export class List {
  id: number
  title: string
  description: string
  cards: Card[] = []

  completedStatus() {
    if (this.cards.length === 0) {
      return false

  }
    return this.cards.every(card => card.completed)
  }
}

