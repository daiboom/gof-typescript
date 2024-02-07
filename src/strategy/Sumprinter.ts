import SumStrategy from './SumStrategy'

export default class Sumprinter {
  print(strategy: SumStrategy, N: number, domOutput: Element) {
    const value = strategy.get(N)
    domOutput.innerHTML = `1~${N}의 합: ${value}`
  }
}
