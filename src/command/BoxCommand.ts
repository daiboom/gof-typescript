import Command from './Command'
import Draw from './Draw'

export default class BoxCommand extends Draw implements Command {
  constructor(
    canvas: HTMLCanvasElement,
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {
    super(canvas)
  }

  run() {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    ctx.beginPath()
    ctx.rect(this.x, this.y, this.width, this.height)

    ctx.fillStyle = this.fillColor
    ctx.fill()

    ctx.strokeStyle = this.strokeColor
    ctx.stroke()
  }
}
