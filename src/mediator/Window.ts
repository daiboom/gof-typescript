import Mediator from './Mediator'
import Participant from './Participant'

export default class Window extends Participant {
  private bClosed = true
  constructor(mediator: Mediator) {
    super(mediator)
  }

  open() {
    if (!this.bClosed) return
    this.bClosed = false
    this.mediator.participantChanged(this)
  }

  close() {
    if (this.bClosed) return
    this.bClosed = true
    this.mediator.participantChanged(this)
  }

  isClosed() {
    return this.bClosed
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.bClosed ? '창 Closed' : '창 Open'

    if (this.bClosed) {
      dom.classList.remove('highlighting')
    } else {
      dom.classList.add('highlighting')
    }
  }
}
