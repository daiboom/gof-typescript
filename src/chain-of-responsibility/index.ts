// 객체지향 설계원칙(SOLID) 중 개방폐쇄 원칙(OCP)을 적용한 코드

import DomainHandler from './DomainHandler'
import PortHandler from './PortHandler'
import ProtocolHandler from './ProtocolHandler'

/**
 * 단일 책임 원칙(Single Responsibility Principle)
 * 각 클래스는 하나의 책임만 가져야한다.
 *
 * 개방-폐쇄 원칙(Open/Closed Principle)
 * 확장에는 열고 있고, 수정에는 닫혀있는, 즉 기존의 코드를 변경하지 않으면서(Closed), 기능을 추가할 수 있도록(Open) 설계가 되어야한다.
 *
 * 리스코프 치환  원칙(Liskov Substitution Principle)
 * 자식 클래스는 언제나 자신의 부모 클래스를 대체할 수 있다.
 *
 * 인터페이스 분리 원칙(Interface Segregation Principle)
 * 작은 기능별로 인터페이스를 작게 분리해야 한다.
 *
 * 의존 역전 원칙(Dependency Inversion Principle)
 * 의존 관계를 맺을 때 변경이 자주 발생하는 것보다는 변경이 거의 없는 것에 의존해야 한다는 것으로 최대한 인터페이스나 추상 클래스와 관계를 맺으라는 것이다.
 */

const handler1 = new ProtocolHandler()
const handler2 = new PortHandler()
const handler3 = new DomainHandler()

handler1.setNext(handler2).setNext(handler3)

const domInput = document.querySelector('#url') as HTMLInputElement
const domBtn = document.querySelector('#btn') as HTMLButtonElement

domBtn.addEventListener('click', () => {
  const url = domInput.value
  handler1.run(url)
})
