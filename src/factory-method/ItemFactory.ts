import Bow from './Bow'
import Factory, { ItemName } from './Factory'
import Item from './Item'
import Shield from './Shield'
import Sword from './Sword'

class ItemCount {
  private _currentCount: number = 0
  constructor(private _maxCount: number) {}

  get maxCount() {
    return this._maxCount
  }

  isCreatable(): boolean {
    return this._currentCount < this.maxCount
  }

  increaseCount() {
    if (this.isCreatable()) {
      this._currentCount++
    }
  }
}

export default class ItemFactory extends Factory {
  protected isCreatable(name: ItemName): boolean {
    const itemCount = this.repository.get(name)
    return !!itemCount?.isCreatable()
  }

  protected createItem(name: ItemName): Item {
    switch (name) {
      case 'sword':
        return new Sword()
      case 'shield':
        return new Shield()
      case 'bow':
        return new Bow()
      //   default:
      //     return
    }
  }

  protected postprocessItem(name: ItemName): void {
    const itemCount = this.repository.get(name)
    itemCount?.increaseCount()
  }

  private repository = new Map<ItemName, ItemCount>()

  constructor() {
    super()

    this.repository.set('sword', new ItemCount(3))
    this.repository.set('shield', new ItemCount(5))
    this.repository.set('bow', new ItemCount(2))
  }
}
