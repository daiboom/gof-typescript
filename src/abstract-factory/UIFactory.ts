import Button from './Button'
import CheckBox from './Checkbox'
import TextEdit from './TextEdit'

export default abstract class UIFactory {
  abstract createButton(dom: HTMLElement, caption: string): Button
  abstract createCheckBox(
    dom: HTMLElement,
    label: string,
    checked: boolean
  ): CheckBox
  abstract createTextEdit(dom: HTMLElement, text2: string): TextEdit
}
