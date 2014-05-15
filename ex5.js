var fs = require('fs');
var path = require('path');
var dirname = process.argv[2];	//Given in problem statement
var extname = '.' + process.argv[3];

fs.readdir(dirname, callback);

function callback(err, list)
{
    if(err) throw err;

    for(var i=0; i < list.length; i++)
    {
	if(path.extname(list[i]) == extname)
	    console.log(list[i]);
    }
}
