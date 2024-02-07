export default abstract class Draw {
  constructor(
    protected canvas: HTMLCanvasElement,
    protected fillColor: string = '#ffffff',
    protected strokeColor: string = '#000000'
  ) {}

  setFillColor(color: string) {
    this.fillColor = color
    return this
  }

  setStrokeColor(color: string) {
    this.strokeColor = color
    return this
  }
}
