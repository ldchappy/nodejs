//nodejs核心模块，url
var http = require('http');
var url = require('url');

var server = http.createServer();

server.on('request',function(req,res){
    var urlString = req.url;

    var testUrl = 'http://www.baidu.com:8090/path/abc.php?uname=lisi&pwd=123';
    console.log(url.parse(testUrl));

    res.setHeader('Content-Type',"text/html;charset=utf-8");


    res.end("<h4>获得url信息</h4>");
})

server.listen(8181,'127.0.0.1',function(err){
    if(err){console.log('this is err')};
    console.log('开启服务器成功');
})

/**
使用url模块，可以得到客户端传来的url信息
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:8090',
  port: '8090',
  hostname: 'www.baidu.com',
  hash: null,
  search: '?uname=lisi&pwd=123',
  query: 'uname=lisi&pwd=123',
  pathname: '/path/abc.php',
  path: '/path/abc.php?uname=lisi&pwd=123',
  href: 'http://www.baidu.com:8090/path/abc.php?uname=lisi&pwd=123' }
*/