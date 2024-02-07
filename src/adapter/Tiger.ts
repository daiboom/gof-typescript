export default class Tiger {
  private _name: string | null = null

  set name(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name || ''
  }

  roar(): string {
    return '어흥~!'
  }
}
