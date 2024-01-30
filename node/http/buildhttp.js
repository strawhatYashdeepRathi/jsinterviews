// http is also a built in server module with node

const  http = require('http');

const dev = http.createServer((req, res) => {
  console.log(res);
  res.send("working http")
})

dev.listen(3000, ()=> {
  console.log('first 3000 server');
})
