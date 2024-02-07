class Item {
  constructor(private _name: string, private _cost: number) {}

  get name(): string {
    return this._name
  }

  get cost(): number {
    return this._cost
  }
}

export default Item
