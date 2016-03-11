var React = require('react');

var messages = React.createClass({
	render() {
		return (
			<h1>{this.props.title}</h1>
		)
	}
});

module.exports = messages;
