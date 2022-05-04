// risultato/suggerimenti/reset/alert
// tentativi/tentativiRimasti/playerNumber
// input/submit
// cpuNumber

const input = document.querySelector('.input')
const submit = document.querySelector('.submit')
const risultato = document.querySelector('.risultato')
const numAlert = document.querySelector('.numAlert')
const suggerimento = document.querySelector('.suggerimento')
const cpu = document.querySelector('.cpu')

let cpuNumber = Math.floor((Math.random() *10) +1)
let tentativi = 1
let resetButton

submit.addEventListener('click', prova)
function prova() {
  const playerNum = Number(input.value)
  if(playerNum === cpuNumber) {
    risultato.textContent = 'Congratulazioni hai Vinto'
    risultato.style.color = 'green'
    setGameOver()
  } else if(tentativi === 3) {
    risultato.textContent = `Hai Perso! il numero corretto era ${cpuNumber}`
    risultato.style.color = 'red'
    setGameOver()
  } if(playerNum > cpuNumber) {
    suggerimento.textContent = 'Numero troppo alto!'
  } else if(playerNum < cpuNumber) {
    suggerimento.textContent = 'Numero troppo basso!'
  }
  numAlert.textContent = `Numero Tentativi ${tentativi}/3`
  tentativi++
  input.value = ''
}

function setGameOver() {
  input.disabled = true
  submit.disabled = true
  resetButton = document.createElement('button')
  resetButton.innerHTML = 'Restart the Game'
  document.body.appendChild(resetButton)
  resetButton.addEventListener('click', resetGame)

}

function resetGame() {
  tentativi = 1
  resetButton.parentElement.removeChild(resetButton)
  input.disabled = false
  submit.disabled = false
  suggerimento.textContent = ''
  risultato.textContent = ''
  numAlert.textContent = ''
  cpuNumber = Math.floor((Math.random() *10) +1)
}
