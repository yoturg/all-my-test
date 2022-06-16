const http = require("http")
const url = require("url")

const port = 9999

const server = http.createServer((req, res) => {
  const urlObject = url.parse(req.url)
  if (urlObject.path === "/api") {
    console.log("method", req.method)
    if (req.method === "GET") {
      const resData = [
        {
          id: 1,
          name: "小明",
          age: 18,
        },
        {
          id: 2,
          name: "小红",
          age: 19,
        },
      ]
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(resData))
    }
  }
})

server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`)
})
