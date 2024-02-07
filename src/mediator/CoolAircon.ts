import Mediator from './Mediator'
import Participant from './Participant'

export default class CoolAircon extends Participant {
  private bOff = true

  constructor(mediator: Mediator) {
    super(mediator)
  }

  on() {
    if (!this.bOff) return
    this.bOff = false
    this.mediator.participantChanged(this)
  }

  off() {
    if (this.bOff) return
    this.bOff = true
    this.mediator.participantChanged(this)
  }

  isRunning() {
    return !this.bOff
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.bOff ? '에어컨 꺼짐' : '에어컨 가동중'

    if (this.bOff) {
      dom.classList.remove('highlighting')
    } else {
      dom.classList.add('highlighting')
    }
  }
}
