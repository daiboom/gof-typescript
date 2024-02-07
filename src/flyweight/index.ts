import DigitFactory from './DigitFactory'
import Number from './Number'

const factory = new DigitFactory()
const domTarget = document.querySelector('#tmp')

let value = 434331

const number = new Number(factory, value)
number.put(domTarget as Element)
