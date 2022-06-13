import "./style.css"

const app = document.querySelector("#app")

function render({ type, props }) {
  const dom = document.createElement(type)
  Object.keys(props)
    .filter((v) => v !== "children")
    .forEach((v) => {
      dom.setAttribute(v, props[v])
    })
  if (props.children && props.children.length) {
    props.children.forEach((v) => {
      dom.appendChild(render(v))
    })
  }
  return dom
}

const domNode = render({ type: "div", props: { class: "red", id: "gray", children: [] } })
app.appendChild(domNode)
