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
    var searchButton;
    if (this.props.searchString && this.props.searchString.length) {
      searchButton = <button onClick={this._onClearSearch}>✕</button>;
    } else {
      searchButton = <button onClick={this._onClearSearch}>O</button>;
    }

    return	<div>
							<input type="text" value={this.props.searchString} onChange={this._onChange} placeholder="Search For Keywords" />
						  {searchButton}
            </div>;
  }
});

module.exports = SearchInput;
