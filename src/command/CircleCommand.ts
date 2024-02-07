import Command from './Command'
import Draw from './Draw'

export default class CircleCommand extends Draw implements Command {
  constructor(
    canvas: HTMLCanvasElement,
    private x: number,
    private y: number,
    private radius: number
  ) {
    super(canvas)
  }

  run() {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)

    ctx.fillStyle = this.fillColor
    ctx.fill()

    ctx.strokeStyle = this.strokeColor
    ctx.stroke()
  }
}
