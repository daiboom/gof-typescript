import Player from './Player'
import RunState from './RunState'
import SitDownState from './SitdownState'
import State from './State'
import WalkState from './WalkState'

export default class StandUpState extends State {
  constructor(player: Player) {
    super(player)
  }

  sitDown(): void {
    this.player.setState(new SitDownState(this.player))
    this.player.talk('I am sitting down')
  }

  standUp(): void {
    this.player.talk('I am already standing')
  }

  walk(): void {
    this.player.setSpeed(8)
    this.player.setState(new WalkState(this.player))
    this.player.talk('I am walking')
  }

  run(): void {
    this.player.setSpeed(8)
    this.player.setState(new RunState(this.player))
    this.player.talk('I am running')
  }

  getDescription(): string {
    return '제자리에 서있는 상태'
  }
}
