const React = require('react'),
  SideBarNavActionCreators = require('../actions/SideBarNavActionCreators');

let SearchInput = React.createClass({
  _onChange(e) {
  	SideBarNavActionCreators.updateSearchString(e.target.value);
  },

  _onClearSearch() {
  	SideBarNavActionCreators.updateSearchString('');
  },

  render() {
    return	<div>
							<input type="text" value={this.props.searchString} onChange={this._onChange} placeholder="Search For Keywords" />
							<button onClick={this._onClearSearch}>✕</button>
						</div>;
  }
});

module.exports = SearchInput;
