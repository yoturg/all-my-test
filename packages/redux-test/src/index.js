import './style.css'
import { getState, subscribe, add, sub, action } from './redux/test'
// import { store } from './redux/classial'

// import { store } from './redux/functional'
// import { store } from './redux/functionalIncrease'
import { store } from './redux/functionalIncrease1-2'
// import store from './redux/origin'
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

// 官方
// Dtimes.innerHTML = store.getState()
// Daddbtn.addEventListener('click', () => {store.dispatch({type: 'add'})})
// Dsubbtn.addEventListener('click', () => {store.dispatch({type: 'sub' })})
// Dasyncbtn.addEventListener('click', () => {
//   store.dispatch(async(d) => {
//     const a = await delay()
//     d({type: 'add'})
//   })
// })

// 函数
Dtimes.innerHTML = store.getState()
Daddbtn.addEventListener('click', () => {store.dispatch('add')})
Dsubbtn.addEventListener('click', () => {store.dispatch('sub' )})
Dasyncbtn.addEventListener('click', () => {
  store.dispatch(async(d) => {
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