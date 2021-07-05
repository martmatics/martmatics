const { fs } = require('fs')
const http = require('http')

const hostname = '127.0.0.1'
const port = 5052

const server = http
  .createServer((req, res) => {
    let path = "./";
    if (req.url === "/" || req.url === "/home") {
      path = path + "index.html";
      status = 200;
    } else if (req.url === "/about" || req.url === "/about-us") {
      path = path + "about.html";
      status = 200;
    } else if (req.url === "/contact") {
      path = path + "contact.html";
      status = 200;
    } else {
      path = path + "error.html";
      status = 404;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        return console.error(err);
      }
      res.writeHead(status, { "Content-Type": "text/html" });
      res.end(data);
      console.log(`Client requested ${req.url}.`);
      console.log(`Client was served ${path}.`);
    });
  })

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})