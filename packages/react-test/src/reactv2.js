import "./style.css"

const app = document.querySelector("#app")

function render(app, vdom) {
  
  const {type, props} = vdom
  const dom = typeof vdom !== 'object' ? document.createTextNode(vdom): document.createElement(type)
  
  props && Object.keys(props)
    .filter((v) => v !== "children")
    .forEach((v) => {
      if(v === 'className') {
        dom.setAttribute('class', props[v])
      } else {
        dom.setAttribute(v, props[v])
      }
    })
  if (props && props.children && props.children.length) {

    props.children.forEach((v) => {
      render(dom, v)
    })
  }

  app.appendChild(dom)
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  }
}

const vdom = createElement(
  "div",
  {
    className: "red",
    id: "gray",
  },
  createElement(
    "p",
    {
      className: "p",
    },
    "1",
    createElement("a", null, "\u94FE\u63A5")
  )
)
console.log(vdom)
render(app, vdom)
