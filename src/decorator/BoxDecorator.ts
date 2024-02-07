import Decorator from './Decorator'
import Item from './Item'

export default class BoxDecorator extends Decorator {
  getLineCount(): number {
    return this.targetItem.getLineCount() + 2
  }
  getLength(i: number): number {
    return this.targetItem.getLength(i) + 2
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 2
  }
  getString(i: number): string {
    const maxWidth = this.getMaxLength()
    if (i === 0 || i === this.getLineCount() - 1) {
      //   return maxWidth.toString()
      return `<span>+${'-'.repeat(maxWidth - 2)}+</span>`
    } else {
      return `<span>|</span>${this.targetItem.getString(i - 1)}${' '.repeat(
        maxWidth - this.getLength(i - 1)
      )}<span>|</span>`
    }
  }

  constructor(targetItem: Item) {
    console.log(targetItem)
    super(targetItem)
  }
}
