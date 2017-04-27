var figlet=require("figlet");
var str=process.argv[2];
figlet.text(str, function(error,data)
{
	if(error)
	{
		console.error(error);
	}
	else
	{
		console.log(data);
	}
})