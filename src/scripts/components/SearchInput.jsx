const React = require('react'),
  SideBarNavActionCreators = require('../actions/SideBarNavActionCreators');
      
let SearchInput = React.createClass({
  handleChange(e) {
  	SideBarNavActionCreators.updateSearchString(e.target.value);
  },

  clearSearch(e) {
  	SideBarNavActionCreators.clearSearch();
  	SideBarNavActionCreators.updateSearchString(e.target.value);
  },

  render() {
    let searchString = this.props.searchString.toLowerCase();
    console.log(searchString);

    return	<div>
							<input type="text" value={searchString} onChange={this.handleChange} placeholder="Search For Keywords" />
							<button onClick={this.clearSearch}>✕</button>
						</div>;
  }
});

module.exports = SearchInput;
