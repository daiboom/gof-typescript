import ThreeDUIFactory from './3DUIFactory'
import FlatUIFactory from './FlatUIFactory'
import UIFactory from './UIFactory'

const domBtn = document.querySelector('.button') as HTMLElement
const domCheckBox = document.querySelector('.checkbox') as HTMLElement
const domTextEdit = document.querySelector('.textedit') as HTMLElement

let factory: UIFactory
const flatMode = true

if (flatMode) {
  factory = new FlatUIFactory()
} else {
  factory = new ThreeDUIFactory()
}

factory.createButton(domBtn, 'BUTTON')
factory.createCheckBox(domCheckBox, 'CheckBox', true)
factory.createTextEdit(domTextEdit, 'Design Pattern')
