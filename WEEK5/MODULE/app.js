const { fs } = require('fs')
const http = require('http')

const hostname = '127.0.0.1'
const port = 5052

const server = http.createServer((req, res) => {
  let path = "./views"
  if (req.url === "/") {
      path = path + "/index.html"
  } else if (req.url === "/contact") {
      path = path + "/contact.html"
  } else if (req.url === "/about") {
      path = path + "/about.html"
  } else if (req.url !== "/contact" || "/about" || "") {
      path = path + "/error.html"
  }

  fs.readFile(path, (err, data) => {
      if (err) return;
      res.writeHead (200, {"Content-Type": "text/html"});
      res.write(data);
  })
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})