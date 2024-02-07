import Command from './Command'
import Draw from './Draw'

export default class ClearCommand extends Draw implements Command {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
  }

  run() {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
