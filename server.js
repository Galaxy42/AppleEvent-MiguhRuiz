var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Aplicación en el puerto => " + port);
});
