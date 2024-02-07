import Prototype from './Prototype'
import Shape from './Shape'

export default class Group implements Prototype, Shape {
  private shapes: (Shape | Prototype)[] = []

  add(shape: Shape | Prototype): this {
    this.shapes.push((shape as Prototype).copy())
    return this
  }

  copy(): this {
    const result = new Group()
    this.shapes.forEach((shape) => {
      result.add(shape)
    })

    return result as this
  }

  draw(canvas: HTMLCanvasElement): this {
    this.shapes.forEach((shape) => {
      console.log('shape', shape)
      ;(shape as Shape).draw(canvas)
    })

    return this
  }

  moveOffset(dx: number, dy: number): this {
    this.shapes.forEach((shape) => {
      ;(shape as Shape).moveOffset(dx, dy)
    })

    return this
  }
}
