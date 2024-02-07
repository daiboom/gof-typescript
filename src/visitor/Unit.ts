import Visitor from './Visitor'

export default interface Unit {
  accept(visitor: Visitor): void
}
