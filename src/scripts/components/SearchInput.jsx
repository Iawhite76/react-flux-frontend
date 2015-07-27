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
      searchButton = <span className="search_icon" onClick={this._onClearSearch}><i className="fa fa-times"></i></span>;
    } else {
      searchButton = <span className="search_icon" onClick={this._onClearSearch}><i className="fa fa-search"></i></span>;
    }

    return	<div id="search_input">
							<input type="text" value={this.props.searchString} onChange={this._onChange} placeholder="Search For Keywords" />
						  {searchButton}
            </div>;
  }
});

module.exports = SearchInput;
