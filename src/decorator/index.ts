import BoxDecorator from './BoxDecorator'
import LineNumberDecorator from './LineNumberDecorator'
import SideDecorator from './SideDecorator'
import Strings from './Strings'

const strings = new Strings()

strings.add('Hello,')
strings.add('world!')
strings.add('Good Morning.')
strings.add('This is a test.')

const domPre = document.querySelector('pre')
if (domPre) {
  strings.print(domPre)
}

const decorator1 = new SideDecorator(strings, '"')
console.log(decorator1)
if (domPre) {
  decorator1.print(domPre)
}

const decorator2 = new LineNumberDecorator(decorator1)

if (domPre) {
  decorator2.print(domPre)
}

const decorator3 = new BoxDecorator(decorator2)

if (domPre) {
  decorator3.print(domPre)
}
