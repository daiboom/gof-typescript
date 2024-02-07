export default class Context {
  private keywords: string[]
  private currentIndex = 0

  constructor(script: string) {
    this.keywords = script.split(' ')
  }

  readNextyWord() {
    this.currentIndex++
    return this.getCurrentKeyword()
  }

  getCurrentKeyword() {
    if (this.keywords.length > this.currentIndex) {
      return this.keywords[this.currentIndex]
    } else {
      return null
    }
  }
}
