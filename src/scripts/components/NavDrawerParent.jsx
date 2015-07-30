const NavDrawerHeader = require('./NavDrawerHeader.jsx'),
      React = require('react'),
      SideBarNav = require('./SideBarNav.jsx');

let Parent = React.createClass({

  getInitialState() {
    return {
      drawerOpen: window.innerWidth > 992 ? true : false
    };
  },

  handleDrawerToggleClick(e){
    if (window.innerWidth < 992) {
      this.setState({
        drawerOpen: !this.state.drawerOpen
      });
    }
  },

  handleResize(e) {
    this.setState({
      drawerOpen: window.innerWidth > 992 ? true : false
    });
  },

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  render() {
    return (
      <div id="sidebar" className="col-md-3">
        <NavDrawerHeader open={this.state.drawerOpen} onDrawerToggleClick={this.handleDrawerToggleClick} />
        <SideBarNav open={this.state.drawerOpen} onDrawerToggleClick={this.handleDrawerToggleClick} />
      </div>
    );
  }
});

module.exports = Parent;