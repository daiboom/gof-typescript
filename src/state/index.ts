import Player from './Player'

const domTalk = document.querySelector('.talk') as HTMLElement
const domStand = document.querySelector('.stand') as HTMLElement
const domSit = document.querySelector('.sit') as HTMLElement
const domWalk = document.querySelector('.walk') as HTMLElement
const domRun = document.querySelector('.run') as HTMLElement

const player = new Player(domTalk)

function putDescription() {
  const domDescription = document.querySelector('.description') as HTMLElement
  //   domDescription.innerText = 'hello'
  domDescription.innerText = `${player
    .getState()
    .getDescription()}/속도: ${player.getSpeed()} km/h`
}

putDescription()

domStand.addEventListener('click', () => {
  player.getState().standUp()
  putDescription()
})

domSit.addEventListener('click', () => {
  player.getState().sitDown()
  putDescription()
})

domWalk.addEventListener('click', () => {
  player.getState().walk()
  putDescription()
})

domRun.addEventListener('click', () => {
  player.getState().run()
  putDescription()
})
