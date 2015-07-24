const AppDispatcher = require('../dispatcher/AppDispatcher'),
			Constants = require('../constants/Constants'),
			ActionTypes = Constants.ActionTypes,
      pickDeep = require('../utils/Utils').pickDeep;


let EventEmitter = require('events').EventEmitter,
	  assign = require('object-assign');

// Underscore because this is a private variable created by the
// module closure
let _pages = [];
let _navigationMenu = [{title: 'Loading...'}];
let _searchString = '';
let _selectedLineage = [];
let _collapsedNodeKeys = {};

let SideBarNavStore = assign({}, EventEmitter.prototype, {

	emitChange() {
		this.emit('change');
	},

	addChangeListener(callback) {
		this.on('change', callback);
	},

	removeChangeListener(callback) {
		this.removeListener('change', callback);
	},

	getPages() {
		return _pages;
	},

	getNavigationMenu() {
		return _navigationMenu;
	},

	getSearchString() {
		return _searchString;
	},

  getSelectedLineage() {
    return _selectedLineage;
  },

  getCollapsedNodeLineages() {
    return _.keys(_collapsedNodeKeys).map(key => {
      return key.split('__')
    });
  }

});

SideBarNavStore.dispatchToken = AppDispatcher.register(function(payload) {
	let action = payload.action;
	switch(action.type) {

    case ActionTypes.CLICK_NAVIGATION_NODE:
      _selectedLineage = action.lineage;
      SideBarNavStore.emitChange();
      break;

    case ActionTypes.CLICK_NAVIGATION_EXPAND_COLLAPSE:
      let key = action.lineage.join('__');
      _collapsedNodeKeys[key] = !_collapsedNodeKeys[key];
      if (!_collapsedNodeKeys[key]) {
        delete _collapsedNodeKeys[key];
      }
      SideBarNavStore.emitChange();
      break;

		case ActionTypes.RECEIVE_PAGES_ARRAY:
      _pages = action.pagesArray;
      SideBarNavStore.emitChange();
      break;

    case ActionTypes.RECEIVE_NAVIGATION_MENU_JSON:
      _navigationMenu = action.navigationMenu;
      SideBarNavStore.emitChange();
      break;

		case ActionTypes.UPDATE_SEARCH_STRING:
			_searchString = action.searchString;
      SideBarNavStore.emitChange();
      break;

    case ActionTypes.CLEAR_SEARCH:
    	_searchString = '';
      SideBarNavStore.emitChange();
      break;

    default:
  }
});

module.exports = SideBarNavStore;
