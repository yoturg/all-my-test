import './style.css'
import { getState, subscribe, add, sub, action } from './redux/test'
import { createStore } from './redux'




const Dtimes = document.createElement('h1')
Dtimes.innerHTML = getState()
const Daddbtn = document.createElement('button')
Daddbtn.innerHTML = '+1'

const Dsubbtn = document.createElement('button')
Dsubbtn.innerHTML = '-1'

// Daddbtn.addEventListener('click', add)
// Dsubbtn.addEventListener('click', sub)
Daddbtn.addEventListener('click', () => {action('add')})
Dsubbtn.addEventListener('click', () => {action('sub')})

subscribe(() => {
  Dtimes.innerHTML = getState()
})


const Dapp = document.querySelector('#app')
;[Dtimes, Daddbtn, Dsubbtn].forEach(v => {
  Dapp.appendChild(v)
})