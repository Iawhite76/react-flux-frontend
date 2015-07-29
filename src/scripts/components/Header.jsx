var React = require('react');
let upsLogo = require('../../assets/images/UPS_logo.svg');

var Header = React.createClass({

  render: function() {

  	return 	<div id="sidebar_header">
		          <img onClick={this.props.onDrawerToggleClick} src={upsLogo} width="45" height="50" alt="UPS logo" />
		          <h2>Mobile Style Library</h2>
		        </div>;

    // return <div className="bar bar-nav">
    //   <a className="icon icon-bars pull-left" onClick={this.props.onDrawerToggleClick}>Click here</a>
    //   <h1 className="title">My app</h1>
    // </div>;
  }
});

module.exports = Header;