import Player from './Player'

export default abstract class State {
  constructor(protected player: Player) {}

  abstract standUp(): void
  abstract sitDown(): void
  abstract walk(): void
  abstract run(): void

  abstract getDescription(): string
}
