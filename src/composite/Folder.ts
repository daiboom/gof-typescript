import Unit from './Unit'

export default class Folder extends Unit {
  private units: Unit[] = []

  constructor(name: string) {
    super(name)
  }

  getSize(): number {
    return this.units.reduce((acc, curr) => acc + curr.getSize(), 0)
  }

  add(unit: Unit): void {
    this.units.push(unit)
  }

  private createUnit(unit: Unit, dom: Element) {
    const domUnit = document.createElement('div')
    domUnit.classList.add('unit')
    domUnit.innerHTML = `<div><span>${unit.getName()}</span><span>${unit.getSize()}</span></div>`
    dom.appendChild(domUnit)
    return domUnit
  }

  list(dom: Element): void {
    const domUnit = this.createUnit(this, dom)
    const isFolder = this instanceof Folder

    if (isFolder) {
      domUnit.classList.add('folder')
      this.units.forEach((unit) => {
        if (unit instanceof Folder) {
          unit.list(domUnit)
        } else {
          this.createUnit(unit, domUnit)
        }
      })
    }
  }
}
