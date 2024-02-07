import Command from './Command'
import Draw from './Draw'

export default class PlayCommand extends Draw implements Command {
  private commands = new Array<Command>()
  private playIndex = 0

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
  }

  addCommand(command: Command) {
    this.commands.push(command)
  }

  run() {
    setTimeout(() => {
      if (this.playIndex < this.commands.length) {
        this.commands[this.playIndex].run()
        this.playIndex++

        this.run()
      } else {
        this.playIndex = 0
        // this.run()
      }
    }, 1000)
  }
}
