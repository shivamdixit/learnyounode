var sum = 0;
var numOfArgs = process.argv.length;

for(var i=2; i < numOfArgs; i++)	//Skipping 0 and 1
{
    sum += Number(process.argv[i]);
}

console.log(sum);
