import Animal from './Animal'

export default class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  sound(): void {
    console.log(`${this.name} 멍멍!`)
  }
}
