export default abstract class Handler {
  protected nextHanlder: Handler

  setNext(handler: Handler): Handler {
    this.nextHanlder = handler
    return handler
  }

  protected abstract process(url: string): void

  run(url: string): void {
    this.process(url)

    if (this.nextHanlder) {
      this.nextHanlder.run(url)
    }
  }

  protected displayResult(title: string, content: string): void {
    const domLayout = document.createElement('div')
    domLayout.classList.add('layout')

    const domTitle = document.createElement('h2')
    domTitle.classList.add('title')
    domTitle.innerText = title
    domLayout.append(domTitle)

    const domContent = document.createElement('p')
    domContent.classList.add('content')
    domContent.innerText = content
    domLayout.append(domContent)

    const domTarget = document.querySelector('.result') as HTMLElement
    domTarget.append(domLayout)
  }
}
