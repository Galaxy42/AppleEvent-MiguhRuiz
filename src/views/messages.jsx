var React = require('react');
var Twitter = require('twitter');
var Nav = require('./navbar.jsx');
var Footer = require('./footer.jsx');

var authKeys = require('../../auth.json');

var Client = new Twitter({
	consumer_key: authKeys.Twitter.consumerKey,
	consumer_secret: authKeys.Twitter.consumerSecret,
	access_token_key: authKeys.Twitter.tokenKey,
	access_token_secret: authKeys.Twitter.tokenSecret
});

var messages = React.createClass({
	componentWillMount: function() {
		Client.get('search/tweets.json', {q: "%23AppleEventMiguhRuiz"}, function(err, tweets, response) {
			if(err) {
				console.log(err);
			}
			console.log(tweets);
		});
	},
	render() {
		return (
			<html lang="en_ES">
			<head>
				<title>Apple Event- Miguh Ruiz</title>
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
				<link rel="stylesheet" href="http://miguhruiz.xyz/public/css/index.css" />
			</head>
			<body>
				<div className="container">
					<Nav />
					<h1>Bienvenido </h1>
					<Footer />
				</div>
			</body>
			</html>
		)
	}
});

module.exports = messages;
