import ThreeDButton from './3DButton'
import ThreeDCheckBox from './3DCheckBox'
import ThreeDTextEdit from './3DTextEdit'
import Button from './Button'
import CheckBox from './Checkbox'
import TextEdit from './TextEdit'
import UIFactory from './UIFactory'

export default class ThreeDUIFactory extends UIFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new ThreeDButton(dom, caption)
  }

  createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox {
    return new ThreeDCheckBox(dom, label, checked)
  }

  createTextEdit(dom: HTMLElement, text2: string): TextEdit {
    return new ThreeDTextEdit(dom, text2)
  }
}
