var React = require('react');

var navbar = React.createClass({
		getInitialState(){
			return {
				Name: "Miguh Ruiz",
				Description: "Full Stack JavaScript Developer"
			};
		},

		render: function () {
			var image = this.state.Profile;
			console.log(image);
			return (
				<nav>
					<div className="branding">
						<img src="https://pbs.twimg.com/profile_images/702869466238025729/7scQYZSq_400x400.jpg/" className="branding-image" />
						<p className="branding-title">{this.state.Name}</p>
						<p className="branding-description">{this.state.Description}</p>
					</div>
				</nav>
			)
		}
});

module.exports = navbar;
