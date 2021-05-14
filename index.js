const pause = document.querySelector('.pause')
const play = document.querySelector('.play')
const btnCircle = document.querySelector('.circle-btn')
const wave1 = document.querySelector('.wave-1')
const wave2 = document.querySelector('.wave-2')

btnCircle.addEventListener('click', (event) => {
  event.preventDefault()
  pause.classList.toggle('visibility')
  play.classList.toggle('visibility')
  wave1.classList.toggle('paused')
  wave2.classList.toggle('paused')
  btnCircle.classList.toggle('shadow')
})
