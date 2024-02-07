import Item from './Item'

export type ItemName = 'shield' | 'sword' | 'bow'

export default abstract class Factory {
  protected abstract isCreatable(name: ItemName): boolean
  protected abstract createItem(name: ItemName): Item
  protected abstract postprocessItem(name: ItemName): void

  create(name: ItemName) {
    if (this.isCreatable(name)) {
      const item = this.createItem(name)
      this.postprocessItem(name)

      return item
    } else {
      return null
    }
  }
}
