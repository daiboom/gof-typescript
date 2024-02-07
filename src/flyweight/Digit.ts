export default class Digit {
  private data: Array<string>

  constructor(private url: string) {}

  private load(url: string, domOutput: Element) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.data = response
        if (domOutput) {
          this.put(domOutput)
        }
      })
      .catch((err) => console.error(err))
  }

  public put(dom: Element): void {
    if (!this.data) {
      this.load(this.url, dom)
    } else {
      dom.innerHTML = '<div class="digit-layout"></div>'
      const domLayout = dom.querySelector('.digit-layout') as Element
      this.data.forEach((item) => {
        const len = item.length
        for (let i = 0; i < len; i++) {
          const domCell = document.createElement('div')
          domCell.style.backgroundColor = item[i] === '1' ? '#ff0' : '#333'
          domLayout.append(domCell)
        }
      })
    }
  }
}
