import './style.css'
import { getState, subscribe, add, sub, action } from './redux/test'
// import { store } from './redux/classial'

// import { store } from './redux/functional'
import { store } from './redux/functionalIncrease'
// import { createStore } from './redux'

function delay(timer = 1000) {
  return new Promise(resolue => {
    setTimeout(resolue, timer)
  })
}



const Dtimes = document.createElement('h1')
const Daddbtn = document.createElement('button')
Daddbtn.innerHTML = '+1'

const Dasyncbtn = document.createElement('button')
Dasyncbtn.innerHTML = '+1(async)'

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
Daddbtn.addEventListener('click', () => {store.dispatch1('add')})
Dsubbtn.addEventListener('click', () => {store.dispatch1('sub')})
Dasyncbtn.addEventListener('click', () => {
  store.dispatch2(async(d) => {
    const a = await delay()
    d('add')
  })
})


store.subscribe(() => {
  Dtimes.innerHTML = store.getState()
})


const Dapp = document.querySelector('#app')
;[Dtimes, Daddbtn, Dsubbtn, Dasyncbtn].forEach(v => {
  Dapp.appendChild(v)
})