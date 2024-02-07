import Display from './Display'

export default class Draft {
  constructor(
    private title: string,
    private author: string,
    private content: string[]
  ) {}

  getTitle(): string {
    return this.title
  }

  getAuthor(): string {
    return this.author
  }

  getContent(): string[] {
    return this.content
  }

  print(display: Display): void {
    display.title(this)
    display.author(this)
    display.content(this)
  }
}
