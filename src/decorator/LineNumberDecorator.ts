import Decorator from './Decorator'
import Item from './Item'

export default class LineNumberDecorator extends Decorator {
  getLineCount(): number {
    return this.targetItem.getLineCount()
  }
  getLength(i: number): number {
    return this.targetItem.getLength(i) + 6
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 6
  }
  getString(i: number): string {
    return (
      `<span>` +
      `${i}`.padStart(4, '0') +
      `</span><span>: </span>${this.targetItem.getString(i)}`
    )
  }

  constructor(targetItem: Item) {
    super(targetItem)
  }
}
