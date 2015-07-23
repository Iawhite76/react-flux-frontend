const React = require('react/addons');

let SideBarSearch = React.createClass({

  _onChange() {

  }

  render() {
    return <input type="text" value={this.state.searchString} onChange={this._onChange} placeholder="Search For Keywords" />;
  }

});

module.exports = SideBarSearch;