const Header = require('./Header.jsx'),
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
      <div id="sidebar" className="col-sm-3">
        <Header onDrawerToggleClick={this.handleDrawerToggleClick}/>
        <SideBarNav open={this.state.drawerOpen}/>
      </div>
    );
  }
});

module.exports = Parent;