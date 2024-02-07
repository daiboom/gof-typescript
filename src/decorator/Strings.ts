import Item from './Item'

export default class Strings extends Item {
  getLineCount(): number {
    return this.data.length
  }

  getLength(i: number): number {
    return this.data[i].length
  }

  getMaxLength(): number {
    return this.data.reduce((max, s) => Math.max(max, s.length), 0)
  }

  getString(i: number): string {
    return this.data[i]
  }

  private data = new Array<string>()

  constructor() {
    super()
  }

  add(string: string): void {
    this.data.push(string)
  }
}
