import Digit from './Digit'

export default class DigitFactory {
  private pool: Array<Digit | null> = Array(10).fill(null)

  getDigit(i: number): Digit {
    if (!this.pool[i]) {
      this.pool[i] = new Digit(`./data/${i}.json`)
    }

    return this.pool[i] as Digit
  }
}
