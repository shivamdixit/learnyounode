var http = require('http');
var requestURL = process.argv[2];

http.get(requestURL, function(response){ }).on('data', function(data){
	console.log(data.toString());
});
