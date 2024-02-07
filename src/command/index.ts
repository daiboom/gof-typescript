/**
 * Command Pattern
 * 하나의 명령(기능)을 객체화한 패턴
 * 객체는 전달할 수 있고 보관할 수 있음, 즉 명령(기능)을 전달하고 보관할 수 있게됨
 * 배치 실행, Undo/Redo, 로깅, 큐잉, 지연 실행, 트랜잭션 등에 활용됨
 */

import BoxCommand from './BoxCommand'
import CircleCommand from './CircleCommand'
import ClearCommand from './ClearCommand'
import PlayCommand from './PlayCommand'
import TextCommand from './TextCommand'

const domCanvas = document.querySelector('canvas') as HTMLCanvasElement
const domDraw = document.querySelector('#draw') as HTMLButtonElement
const domPlay = document.querySelector('#play') as HTMLButtonElement

const cmdClear = new ClearCommand(domCanvas)
const cmdCircle1 = new CircleCommand(domCanvas, 50, 150, 40)

cmdCircle1.setFillColor('#ee4040').setStrokeColor('#ee4040')

const cmdText = new TextCommand(domCanvas, 200, 200, 40, 'Hello, World!')
cmdText.setStrokeColor('#458de5')

const cmdCircle2 = new CircleCommand(domCanvas, 355, 240, 30)
cmdCircle2.setFillColor('#ff884d').setStrokeColor('#ff884d')

const cmdBox = new BoxCommand(domCanvas, 40, 165, 320, 65)
cmdBox.setFillColor('#4dc4ff').setStrokeColor('#4dc4ff')

domDraw.addEventListener('click', () => {
  cmdClear.run()
  cmdCircle1.run()
  cmdBox.run()
  cmdCircle2.run()
  cmdText.run()
})

const playCommand = new PlayCommand(domCanvas)
playCommand.addCommand(cmdClear)
playCommand.addCommand(cmdCircle1)
playCommand.addCommand(cmdBox)
playCommand.addCommand(cmdCircle2)
playCommand.addCommand(cmdText)

domPlay.addEventListener('click', () => {
  playCommand.run()
})
