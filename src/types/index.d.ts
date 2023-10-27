export type ICard = { icon: string, title: string, content?: string }

enum TheMoment {
  running,
  waiting,
  tomorrow,
}

declare global { ICard };