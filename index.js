var app = require('express')(),
	http = require('http').Server(app);
//*************************** get ***************************
var getHandlers = [
	['/',  {
		getKey : 'Welcome to simple node  WebServer!'
	}]
];
getHandlers.forEach(function (handler) {
	app.get(handler[0], function(req, res) {
		res.writeHead(200,{
			'Content-Type': 'text/json'
		});
		res.write(JSON.stringify(handler[1]));
		res.end();
	});
});
//*************************** get ***************************

//*************************** post ***************************
var postHandlers = [
	['/test', {
		postKey : 'post测试数据'
	}]
];

postHandlers.forEach(function (handler) {
	app.post(handler[0], function(req, res) {
		res.writeHead(200,{
			'Content-Type': 'text/json',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Headers': 'x-requested-with,Content-Type',
			'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
			'Access-Control-Allow-Origin': req.headers.origin,
			'Access-Control-Max-Age': 3600
		});
		res.write(JSON.stringify(handler[1]));
		res.end();
	});
});
//*************************** post ***************************

http.listen(10108, function(){
	console.log('listening on *:10108');
});

