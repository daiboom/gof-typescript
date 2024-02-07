import Player from './Player'

export default class NBettingPlayer extends Player {
  update(diceNumber: number): void {
    this._winning = this.numbers.includes(diceNumber)
  }

  constructor(name: string, private numbers: number[]) {
    super(name)
  }
}
