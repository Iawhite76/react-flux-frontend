var Header = require('./Header.jsx');
var React = require('react'),
    SideBarNav = require('./SideBarNav.jsx');

var Parent = React.createClass({

  getInitialState: function() {
    return {
      drawerOpen: window.innerWidth > 768 ? true : false
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