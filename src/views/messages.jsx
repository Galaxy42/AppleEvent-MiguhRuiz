var React = require('react');
var Twitter = require('twitter');
var $ = require('jquery');

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
			<h1>{this.props.title}</h1>
		)
	}
});

module.exports = messages;
