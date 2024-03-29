import CheckBox from './Checkbox'

export default class TheeDCheckBox extends CheckBox {
  constructor(dom: HTMLElement, label: string, checked: boolean) {
    super(dom, label, checked)
    this.render()
  }

  render(): void {
    this.dom.innerHTML = `
      <label>${this.label}
      <input type="checkbox" ${this.checked ? 'checked="checked"' : ''} />
      <div class="box"></div>
      <div class="line"></div>
      </label>
    `

    this.dom.classList.add('threeD-checkbox')
  }
}
