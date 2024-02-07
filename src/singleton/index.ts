import King from './King'

const king = King.getInstance()
king.sayHello()

const king2 = King.getInstance()

console.log(king === king2)
