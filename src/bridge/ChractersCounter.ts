import Draft from './Draft'

export default class CharactersCounter extends Draft {
  constructor(title: string, author: string, content: string[]) {
    super(title, author, content)
  }

  getCharactersCount(): number {
    let count = 0
    count += this.getTitle().length
    count += this.getAuthor().length
    count += this.getContent().reduce((acc, cur) => acc + cur.length, 0)

    return count
  }
}
