/**
 * Prototype Pattern
 * 실행 중에 생성된 객체로 다른 객체를 생성하는 패턴
 * prototype으로 만든 객체의 상태를 변경해도 원본 객체의 상태는 변경되지 않도록 해야함(Deep Copy)
 */

import Group from './Group'
import Line from './Line'
import Point from './Point'

const domCanvas = document.querySelector('canvas') as HTMLCanvasElement

const pt1 = new Point(100, 100)
pt1.draw(domCanvas)

const pt2 = new Point(200, 100)
pt2.draw(domCanvas)

const pt3 = new Point(200, 200)
// pt3.draw(domCanvas)

const pt4 = new Point(100, 200)
// pt4.draw(domCanvas)

const line1 = new Line(pt1, pt2)
line1.draw(domCanvas)

const line2 = new Line(pt2, pt3)
line2.draw(domCanvas)

const line3 = new Line(pt3, pt4)
line3.draw(domCanvas)

const line4 = new Line(pt4, pt1)
line4.draw(domCanvas)

const rect = new Group()
rect.add(line1).add(line2).add(line3).add(line4)
rect.draw(domCanvas)

const cloneRect = rect.copy()
cloneRect.moveOffset(100, 100)
cloneRect.draw(domCanvas)
