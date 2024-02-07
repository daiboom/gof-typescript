import Context from './Context'

export default interface Expression {
  parse(context: Context): boolean
  run(): boolean
  getDescription(): string
}
