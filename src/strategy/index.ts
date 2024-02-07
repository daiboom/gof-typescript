import GaussSumStrategy from './GaussSumStrategy'
import LoopSumStrategy from './LoopSumStrategy'
import Sumprinter from './Sumprinter'

const printer = new Sumprinter()
const dom1 = document.createElement('h1')
document.body.append(dom1)

const dom2 = document.createElement('h1')
document.body.append(dom2)

printer.print(new LoopSumStrategy(), 100, dom1)
printer.print(new GaussSumStrategy(), 100, dom2)
