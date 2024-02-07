import Handler from './Handler'

export default class PortHandler extends Handler {
  protected process(url: string): void {
    const index = url.lastIndexOf(':')
    if (index !== -1) {
      const strPort = url.substring(index + 1)

      if (!isNaN(Number(strPort))) {
        this.displayResult('PORT', url.substring(index + 1))
        return
      }
    }

    this.displayResult('PORT', 'NONE')
  }
}
