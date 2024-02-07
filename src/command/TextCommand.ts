import Command from './Command'
import Draw from './Draw'

export default class TextCommand extends Draw implements Command {
  constructor(
    canvas: HTMLCanvasElement,
    private x: number,
    private y: number,
    private size: number,
    private text: string
  ) {
    super(canvas)
  }

  run() {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    ctx.font = `${this.size}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    ctx.fillStyle = this.fillColor
    ctx.strokeStyle = this.strokeColor

    ctx.fillText(this.text, this.x, this.y)
    ctx.strokeText(this.text, this.x, this.y)
  }
}
