//nodejs核心模块之一，开启一个http服务
var http = require('http');

var server = http.createServer();

server.on('request',function(req,res){
    res.end('welcome');
});

server.listen(8181,'127.0.0.1',function(err){
    if(err){console.log('this is err')};
    console.log('开启服务器成功');
})

//使用命令行启动   node http.js