
const React = require('react/addons'),
			$ = require('jquery');

let upsLogo = require('../../assets/images/UPS_logo.svg');

let MobileSidebarHeader = React.createClass({
	componentDidMount: function() {
    $('#mobile_sidebar_header')
      .click(() => {
      	$('#sidebar').toggleClass('show_drawer');
      }); 
  },

	render() {
		return	<div id="mobile_sidebar_header">
							<img ref="ups_logo" src={upsLogo} width="45" height="50" alt="UPS logo" />
						</div>
	}

});

module.exports = MobileSidebarHeader;