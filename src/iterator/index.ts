import Array from './Array'
import Item from './Item'

const runIterator = () => {
  console.log('hello')
  const items = [
    new Item('Item 1', 100),
    new Item('Item 2', 200),
    new Item('Item 3', 300),
    new Item('Item 4', 400),
  ]

  const array = new Array(items)
  const iter = array.iterator()

  console.log(array)
  while (iter.next()) {
    console.log(iter.current())
    const item = iter.current()
    const divItem = document.createElement('div')
    divItem.textContent = `item.name: ${item.name}, item.cost: ${item.cost}`
    document.body.appendChild(divItem)
  }
}

window.onload = runIterator
