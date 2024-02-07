import IImage from './Image'
import RealImage from './RealImage'

export default class ProxyImage implements IImage {
  private image: RealImage
  private domLayout: HTMLElement
  private domTitle: HTMLElement

  constructor(
    private title: string,
    private url: string,
    private parent: Element
  ) {
    this.domLayout = document.createElement('div')
    this.domLayout.classList.add('layout')
    this.parent.append(this.domLayout)

    this.domTitle = document.createElement('h2')
    this.domTitle.classList.add('title-proxy')
    this.domTitle.innerHTML = `<span>${this.title}</span> <span>Load</span>` // 👈 `Load` 버튼 추가
    this.domLayout.append(this.domTitle)
  }

  append(): void {
    if (this.image) {
      return
    }

    this.domLayout.addEventListener('click', () => {
      this.domLayout.style.border = 'none'
      this.domLayout.innerHTML = ''
      this.image = new RealImage(this.title, this.url, this.domLayout)
      this.image.append()
    })
  }
}
