var React = require('react');
var $ = require('jquery');

var authKeys = require('../../auth.json');

var messages = React.createClass({
	componentWillMount: function() {
		$.get('#', function(){});	
	},
	render() {
		return (
			<h1>{this.props.title}</h1>
		)
	}
});

module.exports = messages;
