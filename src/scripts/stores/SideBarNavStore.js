const AppDispatcher = require('../dispatcher/AppDispatcher'),
			Constants = require('../constants/Constants'),
			ActionTypes = Constants.ActionTypes,
      buildMenu = require('../utils/Utils').buildMenu;


let EventEmitter = require('events').EventEmitter,
	  assign = require('object-assign');

// Underscore because this is a private variable created by the 
// module closure
let _pages = [];
let _navigationMenu = {};

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

});

AppDispatcher.register(function(payload) {
	let action = payload.action;
	switch(action.type) {

		case ActionTypes.RECEIVE_PAGES_ARRAY:
      _pages = action.pagesArray;
      SideBarNavStore.emitChange();
      break;

    case ActionTypes.RECEIVE_NAVIGATION_MENU_JSON:
	    console.log(action.navigationMenu);
      _navigationMenu = buildMenu(action.navigationMenu);
      SideBarNavStore.emitChange();
      break;

    default:
  }
});

module.exports = SideBarNavStore;
