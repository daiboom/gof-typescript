import Player from './Player'
import RunState from './RunState'
import SitdownState from './SitdownState'
import StandUpState from './StandUpState'
import State from './State'

export default class WalkState extends State {
  constructor(player: Player) {
    super(player)
  }

  standUp(): void {
    this.player.setSpeed(0)
    this.player.talk('멈추기')
    this.player.setState(new StandUpState(this.player))
  }

  sitDown(): void {
    this.player.setSpeed(0)
    this.player.talk('걷다가 앉습니다.')
    this.player.setState(new SitdownState(this.player))
  }

  walk(): void {
    this.player.talk('걷고 있습니다.')
  }

  run(): void {
    this.player.setSpeed(20)
    this.player.talk('뛰고 있습니다.')
    this.player.setState(new RunState(this.player))
  }

  getDescription(): string {
    return '걷는 상태'
  }
}
