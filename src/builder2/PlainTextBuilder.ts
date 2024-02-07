import Builder from './Builder'
import Data from './Data'

export default class PlainTextBuilder extends Builder {
  constructor(data: Data) {
    super(data)
  }

  head(): string {
    return ``
  }

  body(): string {
    return `name: ${this.data.name}, age: ${this.data.age}`
  }

  foot(): string {
    return ''
  }
}
