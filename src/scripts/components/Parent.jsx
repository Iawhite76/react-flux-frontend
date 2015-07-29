var Drawer = require('./Drawer.jsx');
var Header = require('./Header.jsx');
var React = require('react'),
    SideBarNav = require('./SideBarNav.jsx');

var Parent = React.createClass({

  getInitialState: function() {
    return {
      drawerOpen: true
    };
  },

  handleDrawerToggleClick: function(e){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  },

  render: function() {
    return (
      <div id="sidebar" className="col-sm-3">
        <Header onDrawerToggleClick={this.handleDrawerToggleClick}/>
        <SideBarNav open={this.state.drawerOpen}/>
      </div>
    );
  }
});

module.exports = Parent;