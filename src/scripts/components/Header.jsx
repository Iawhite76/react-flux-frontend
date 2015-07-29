const React = require('react');

let upsLogo = require('../../assets/images/UPS_logo.svg');

let Header = React.createClass({

  render() {

  	return 	<div id="sidebar_header">
		          <img onClick={this.props.onDrawerToggleClick} src={upsLogo} width="45" height="50" alt="UPS logo" />
		          <h2>Mobile Style Library</h2>
		        </div>;
  }
});

module.exports = Header;