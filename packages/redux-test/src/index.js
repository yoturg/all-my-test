import './style.css'
import { getState, subscribe, add } from './redux/test'
import { createStore } from './redux'




const Dtimes = document.createElement('h1')
Dtimes.innerHTML = getState()
const Dbtn = document.createElement('button')
Dbtn.innerHTML = '+1'

Dbtn.addEventListener('click', add)

subscribe((state) => {
  Dtimes.innerHTML = state
})


const Dapp = document.querySelector('#app')
;[Dtimes, Dbtn].forEach(v => {
  Dapp.appendChild(v)
})