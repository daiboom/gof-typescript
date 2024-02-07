export default class Data {
  constructor(private _name: string, private _age: number) {}

  get name(): string {
    return this._name
  }

  get age(): number {
    return this._age
  }
}
