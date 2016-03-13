var React = require('react');

var Footer = React.createClass({
  getInitialState: function () {
    return {
      Name: "Miguh Ruiz",
      Description: "Full Stack JavaScript Developer"
    };
  },

  render: function () {
    return (
      <footer>
        <div className="branding">
          <img src="https://pbs.twimg.com/profile_images/702869466238025729/7scQYZSq_400x400.jpg/" className="branding-image" />
          <p className="branding-title">{this.state.Name}</p>
          <p className="branding-description">{this.state.Description}</p>
        </div>

        <div className="icons">
          <a href="http://blog.miguhruiz.xyz/" className="icon-newspaper blog" target="_blank" />
          <a href="https://github.com/MiguhRuiz" className="icon-github github" target="_blank" />
          <a href="https://twitter.com/MiguhRuiz" className="icon-twitter twitter" target="_blank" />
        </div>

      </footer>
    )
  }
});

module.exports = Footer;
