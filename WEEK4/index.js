// const greetings = (person: string) => {
//     console.log('Good day ' + person);
// };
// greetings('Daniel')

// var userAcount = /** @class */ (function () {
//     function userAcount(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     return userAcount;
// }());
// var user = new userAcount("Mupphy", 1);

// console.log(user.name);

// const fs = require('fs')

// const content = 'i have done it!'

// fs.writeFile('./mart/week4.text', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
 
// })
// console.log('file writen successfully');

// const fs = require('fs')

// fs.readFile('./WEEK4', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

// const fs = require('fs')

// const folderName = 'mart'

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName)
//   }
// } catch (err) {
//   console.error(err)
// }

// const fs = require('fs')

// fs.rename('/mart', '/martins', err => {
//   if (err) {
//     console.error(err)
//     return
//   }
  
// })
// console.log('folder renamed')

// var os = require('os');
// console.log(os.platform());
// console.log( os.arch());
// console.log(os.cpus());
// console.log(os.endianness());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.networkInterfaces());
// console.log(os.loadavg());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());


const http = require('http')

const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><head><style>.city background-color: tomato;color: white;border: 2px solid black;margin: 20px;padding: 20px;</style></head><body><div class="text"><h2>Backend Developer</h2><p> A Backend Developer works on Server.</p></div><div class="city"><h2>Paris</h2><p>Paris is the capital of France.</p></div><div class="city"><h2>Tokyo</h2><p>Tokyo is the capital of Japan.</p></div></body></html>')
 
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})