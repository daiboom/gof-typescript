import Prototype from './Prototype'
import Shape from './Shape'

export default class Point implements Prototype, Shape {
  constructor(private x: number, private y: number) {}

  setX(v: number) {
    this.x = v

    return this
  }

  setY(v: number) {
    this.y = v

    return this
  }

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }

  copy(): this {
    const result = new Point(this.x, this.y)
    return result as this
  }

  draw(canvas: HTMLCanvasElement): this {
    const context = canvas.getContext('2d')
    context?.beginPath()
    context?.arc(this.x, this.y, 4, 0, Math.PI * 2)
    context?.fill()

    return this
  }

  moveOffset(dx: number, dy: number): this {
    this.x += dx
    this.y += dy

    return this
  }
}
