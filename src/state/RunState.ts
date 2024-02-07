import Player from './Player'
import SitDownState from './SitdownState'
import StandUpState from './StandUpState'
import State from './State'
import WalkState from './WalkState'

export default class RunState extends State {
  constructor(player: Player) {
    super(player)
  }

  standUp(): void {
    this.player.setSpeed(0)
    this.player.setState(new StandUpState(this.player))
    this.player.talk('뛰다가 멈춥니다.')
  }

  sitDown(): void {
    this.player.setSpeed(0)
    this.player.talk('뛰다가 앉습니다.')
    this.player.setState(new SitDownState(this.player))
  }

  walk(): void {
    this.player.setSpeed(8)
    this.player.setState(new WalkState(this.player))
    this.player.talk('앉은 상태에서는 걸을 수 없습니다.')
  }

  run(): void {
    this.player.setSpeed(this.player.getSpeed() + 2)
    this.player.talk('더 빨리 뜁니다')
  }

  getDescription(): string {
    return '뛰는 상태'
  }
}
