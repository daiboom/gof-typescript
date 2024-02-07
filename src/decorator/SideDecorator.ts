import Decorator from './Decorator'
import Item from './Item'

export default class SideDecorator extends Decorator {
  getLineCount(): number {
    return this.targetItem.getLineCount()
  }
  getLength(i: number): number {
    return this.targetItem.getLength(i) + this.ch.length * 2
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + this.ch.length * 2
  }
  getString(i: number): string {
    return `<span>${this.ch}</span>${this.targetItem.getString(i)}<span>${
      this.ch
    }</span>`
  }

  constructor(targetItem: Item, private ch: string) {
    super(targetItem)
  }
}
