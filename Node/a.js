console.log("hello world!")

let http = require('http')
http.createServer(()=>{
    console.log("我来了");
}).listen(8888)