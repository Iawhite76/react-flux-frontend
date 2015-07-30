const React = require('react');

let upsLogo = require('../../assets/images/UPS_logo.svg');

let NavDrawerHeader = React.createClass({

  render() {
  	let drawerToggleIcon;

  	if (this.props.open) {
  		drawerToggleIcon = <i onClick={this.props.onDrawerToggleClick}>←</i>
  	} else {
  		drawerToggleIcon = <i className="fa fa-bars" onClick={this.props.onDrawerToggleClick}></i>;
  	}

  	return 	<div id="sidebar_header">
					  	{drawerToggleIcon}
		          <img src={upsLogo} width="45" height="50" alt="UPS logo" />
		          <h2 className="hidden-xs">Mobile Style Library</h2>
		        </div>;
  }
});

module.exports = NavDrawerHeader;