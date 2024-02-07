import TextEdit from './TextEdit'

export default class ThreeDTextEdit extends TextEdit {
  constructor(dom: HTMLElement, text: string) {
    super(dom, text)
    this.render()
  }

  render() {
    this.dom.innerHTML = `
      <input type="text" value="${this.text}">
    `
    this.dom.classList.add('threeD-input')
  }
}
