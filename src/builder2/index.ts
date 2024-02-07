import Data from './Data'
import Director from './Director'
import JSONBuilder from './JSONBuilder'
import PlainTextBuilder from './PlainTextBuilder'
import XMLBuilder from './XMLBuilder'

const data = new Data('Jane', 76)

const builder = new PlainTextBuilder(data)
const jsonBuilder = new JSONBuilder(data)
const xmlBuilder = new XMLBuilder(data)

const director = new Director(builder)
const director2 = new Director(jsonBuilder)
const director3 = new Director(xmlBuilder)

console.log(director.build())
console.log(director2.build())
console.log(director3.build())
