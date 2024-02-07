import CommandExpression from './CommandExpression'
import Context from './Context'

export default class ActionCommandExpression extends CommandExpression {
  constructor(keyword: string) {
    super(keyword)
  }

  parse(context: Context): boolean {
    if (!ActionCommandExpression.checkValidKeyword(this.keyword)) {
      return false
    }

    if (context.readNextyWord() === null) {
      return false
    }

    return true
  }

  static checkValidKeyword(keyword: string): boolean {
    const bOK =
      keyword === 'FRONT' ||
      keyword === 'BACK' ||
      keyword === 'LEFT' ||
      keyword === 'RIGHT'

    return bOK
  }

  run(): boolean {
    console.log('run ====> ' + this.keyword)
    return true
  }

  getDescription(): string {
    return this.keyword
  }
}
