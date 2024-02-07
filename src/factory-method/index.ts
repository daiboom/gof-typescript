/**
 * Factory Method
 * 객체 생성을 위한 패턴
 * 객체 생성에 필요한 과정을 템플릿처럼 정해놓고 각 과정을 다양하게 구현이 가능함
 * 구체적으로 생성할 클래스를 유연하게 정할 수 있음
 * 객체 생성에 대한 인터페이스와 구현의 분리
 */

import { ItemName } from './Factory'
import ItemFactory from './ItemFactory'

const factory = new ItemFactory()
const domOutput = document.querySelector('textarea') as HTMLTextAreaElement
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const itemName = (event.target as HTMLElement).innerText
    const item = factory.create(itemName as ItemName)
    if (item) {
      domOutput.value += `\n${item.use()}`
    } else {
      domOutput.value += `\n${itemName}을 사용할  수 없습니다.`
    }
    domOutput.scrollTop = domOutput.scrollHeight
  })
})
