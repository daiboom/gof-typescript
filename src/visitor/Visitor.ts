import Unit from './Unit'

export default interface Visitor {
  visit(unit: Unit): void
}
