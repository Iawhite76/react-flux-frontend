const AppDispatcher = require('../dispatcher/AppDispatcher'),
			Constants = require('../constants/Constants'),
			ActionTypes = Constants.ActionTypes;

let EventEmitter = require('events').EventEmitter,
	  assign = require('object-assign');

// Underscore because this is a private variable created by the 
// module closure
let _categories = [];

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

	getAllCategories() {
		return _categories;
	}
});

AppDispatcher.register(function(payload) {
	let action = payload.action;
	switch(action.type) {

		case ActionTypes.RECEIVE_CATEGORIES:
      _categories = action.categories;
      SideBarNavStore.emitChange();
      break;

    default:
  }
});

module.exports = SideBarNavStore;
