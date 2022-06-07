import './style.css'
import { getState, subscribe, add, sub, action } from './redux/test'
// import { store } from './redux/classial'

import { store } from './redux/functional'
// import { createStore } from './redux'





const Dtimes = document.createElement('h1')
const Daddbtn = document.createElement('button')
Daddbtn.innerHTML = '+1'

const Dsubbtn = document.createElement('button')
Dsubbtn.innerHTML = '-1'

// Daddbtn.addEventListener('click', add)
// Dsubbtn.addEventListener('click', sub)

// 原生
// Dtimes.innerHTML = getState()
// Daddbtn.addEventListener('click', () => {action('add')})
// Dsubbtn.addEventListener('click', () => {action('sub')})

// subscribe(() => {
//   Dtimes.innerHTML = getState()
// })

// 类
Dtimes.innerHTML = store.getState()
Daddbtn.addEventListener('click', () => {store.dispatch('add')})
Dsubbtn.addEventListener('click', () => {store.dispatch('sub')})

store.subscribe(() => {
  Dtimes.innerHTML = store.getState()
})


const Dapp = document.querySelector('#app')
;[Dtimes, Daddbtn, Dsubbtn].forEach(v => {
  Dapp.appendChild(v)
})