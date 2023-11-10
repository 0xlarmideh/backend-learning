const http = require('http')

const server = http.createServer((req, res) => {
  console.log('Server started.......')

  // set header
  res.setHeader('Content-Type', 'application/json ')
})

server.listen(3000, 'localhost', (req, res) => {
  console.log("listenening on port 3000.....");
});