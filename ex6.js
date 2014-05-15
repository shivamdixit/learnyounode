var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], callback);

function callback(err, data)
{
    	if(err) throw err;
	data.forEach(function(name){
		console.log(name);	
	});
}
