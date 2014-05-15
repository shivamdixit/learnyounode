var fs = require('fs');
var path = require('path');
var newList = Array();

module.exports = function(dirname, extname, callback )
{
        extname = '.' + extname;
	
	fs.readdir(dirname, function(err, list){

		if(err) return callback(err);
		for(var i=0; i < list.length; i++)
		{
			if(path.extname(list[i]) == extname)
			newList.push(list[i]);
		}

		callback(err, newList);
	});
}
