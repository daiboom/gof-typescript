import Builder from './Builder'
import Data from './Data'

export default class JSONBuilder extends Builder {
  head(): string {
    return `{ `
  }

  body(): string {
    return `name: ${this.data.name}, age: ${this.data.age}`
  }

  foot(): string {
    return ` }`
  }

  constructor(data: Data) {
    super(data)
  }
}
