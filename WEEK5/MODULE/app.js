const { fs } = require('fs')
const http = require('http')

const hostname = '127.0.0.1'
const port = 5052

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

console.log(req.url);
let path = "./views"
if (res.url === "/contact"){
    path = path + "contact.html";
}else {
    path = path + "error.html";
}
  fs.readFile(path, (err, data) => {
      if (err) return;

      res.end(data)
  })
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})