import Button from './Button'
import CheckBox from './Checkbox'
import FlatButton from './FlatButton'
import FlatCheckBox from './FlatCheckBox'
import FlatTextEdit from './FlatTextEdit'
import TextEdit from './TextEdit'
import UIFactory from './UIFactory'

export default class FlatUIFactory extends UIFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new FlatButton(dom, caption)
  }

  createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox {
    return new FlatCheckBox(dom, label, checked)
  }

  createTextEdit(dom: HTMLElement, text2: string): TextEdit {
    return new FlatTextEdit(dom, text2)
  }
}
