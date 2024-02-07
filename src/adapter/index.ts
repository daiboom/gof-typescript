import Animal from './Animal'
import Cat from './Cat'
import Dog from './Dog'
import TigerAdapter from './TigerAdapter'

const list = Array<Animal>()
list.push(new Dog('멍멍이'))
list.push(new Cat('야옹이'))
list.push(new Cat('야옹이2'))

const tiger = new TigerAdapter('호돌이')
list.push(tiger)

list.forEach((animal) => {
  animal.sound()
})
