const React = require('react'),
  SideBarNavActionCreators = require('../actions/SideBarNavActionCreators');
      
let SearchInput = React.createClass({
  handleChange(e) {
    SideBarNavActionCreators.getPages(e.target.value);
  },

  render() {
    let searchString = this.props.searchString.toLowerCase();
    console.log(searchString);

    return <input type="text" value={searchString} onChange={this.handleChange} placeholder="Search For Keywords" />;
  }
});

module.exports = SearchInput;
