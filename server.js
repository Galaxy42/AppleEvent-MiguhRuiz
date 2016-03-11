require('node-jsx').install({harmony: true});
var express = require('express');
var reactEngine = require('react-engine');

var app = express();
var port = process.env.PORT || 3000;

app.set('views', __dirname + '/src/views');

var engine = reactEngine.server.create();

app.engine('.jsx', engine);
app.set ('view engine', 'jsx');
app.set('view', reactEngine.expressView);

app.get('/', function(req, res) {
	res.render('messages', {
		"title": "Bienvenido",
	});
});

app.listen(port, function(){
	console.log("Aplicación en el puerto => " + port);
});
