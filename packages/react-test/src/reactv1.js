import './style.css'

const app = document.querySelector('#app')




function render(tagName, props) {
  const dom = document.createElement(tagName)
  Object.keys(props).forEach(v => {
    dom.setAttribute(v, props[v])
  })
  return dom
}

const domNode = render('div', {class: 'red', id: 'gray'})
app.appendChild(domNode)