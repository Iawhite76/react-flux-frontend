const NavDrawerHeader = require('./NavDrawerHeader.jsx'),
      React = require('react'),
      SideBarNav = require('./SideBarNav.jsx');

let Parent = React.createClass({

  getInitialState() {
    return {
      drawerOpen: window.innerWidth > 768 ? true : false
    };
  },

  handleDrawerToggleClick(e){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  },

  render() {
    return (
      <div id="sidebar" className="col-md-3">
        <NavDrawerHeader onDrawerToggleClick={this.handleDrawerToggleClick}/>
        <SideBarNav open={this.state.drawerOpen}/>
      </div>
    );
  }
});

module.exports = Parent;