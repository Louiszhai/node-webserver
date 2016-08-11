var app = require('express')(),
	http = require('http').Server(app);
//*************************** get ***************************
var getHandlers = {
	'/': {
		getKey : 'Welcome to simple node  WebServer!'
	}
};

for(var path in getHandlers){
	if(getHandlers.hasOwnProperty(path)){
		(function(path){
			app.get(path, function(req, res) {
				res.writeHead(200,{
					'Content-Type': 'text/json'
				});
				res.write(JSON.stringify(getHandlers[path]));
				res.end();
			});
		})(path);
	}
}
//*************************** get ***************************

//*************************** post ***************************
var postHandlers = {
	'/test': {
		postKey : 'post测试数据'
	}
};

for(path in postHandlers){
	if(postHandlers.hasOwnProperty(path)) {
		(function(path){
			app.post(path, function(req, res) {
				res.writeHead(200,{
					'Content-Type': 'text/json',
					'Access-Control-Allow-Credentials': true,
					'Access-Control-Allow-Headers': 'x-requested-with,Content-Type',
					'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
					'Access-Control-Allow-Origin': req.headers.origin,
					'Access-Control-Max-Age': 3600
				});
				res.write(JSON.stringify(postHandlers[path]));
				res.end();
			});
		})(path);
	}
}
//*************************** post ***************************

http.listen(10108, function(){
	console.log('listening on *:10108');
});

