// const http = require("http");
// const myfunction = (req, res)=> {
//     res.end("hello world");
// };
// http.createServer(myfunction).listen(3000);


// const {upperCase}= require ()


const http = require('http');
const uc=require('upper-case');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("Hello world"));
    res.end();
}).listen(8080);
console.log("app runing on port 8080")