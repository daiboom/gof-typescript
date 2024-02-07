export default abstract class Item {
  abstract getLineCount(): number
  abstract getLength(i: number): number
  abstract getMaxLength(): number
  abstract getString(i: number): string

  print(dom: HTMLElement): void {
    const result: string[] = []
    const cntLines = this.getLineCount()

    for (let i = 0; i < cntLines; i++) {
      const string = this.getString(i)
      result.push(string)
    }

    dom.innerHTML = result.join('\n')
  }
}
