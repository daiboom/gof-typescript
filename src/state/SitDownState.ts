import Player from './Player'
import StandUpState from './StandUpState'
import State from './State'

export default class SitDownState extends State {
  constructor(player: Player) {
    super(player)
  }

  standUp(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk('일어납니다.')
  }

  sitDown(): void {
    this.player.talk('I am sitting down')
  }

  walk(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk('앉은 상태에서는 걸을 수 없습니다.')
  }
  run(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk('앉은 상태에서는 뛸 수 없습니다.')
  }
  getDescription(): string {
    return '앉아있는 상태'
  }
}
