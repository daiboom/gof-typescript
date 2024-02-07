import Item from './Item'

export default class Bow implements Item {
  use(): string {
    return 'shoot an arrow!'
  }
}
