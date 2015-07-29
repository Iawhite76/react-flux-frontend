const React = require('react');

let upsLogo = require('../../assets/images/UPS_logo.svg');

let NavDrawerHeader = React.createClass({

  render() {

  	return 	<div id="sidebar_header">
					  	<i className="fa fa-bars" onClick={this.props.onDrawerToggleClick}></i>
		          <img src={upsLogo} width="45" height="50" alt="UPS logo" />
		          <h2 className="hidden-xs">Mobile Style Library</h2>
		        </div>;
  }
});

module.exports = NavDrawerHeader;