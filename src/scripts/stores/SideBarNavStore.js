const AppDispatcher = require('../dispatcher/AppDispatcher'),
			Constants = require('../constants/Constants'),
			ActionTypes = Constants.ActionTypes;

let EventEmitter = require('events').EventEmitter,
	  assign = require('object-assign'),
	  WP = require( 'wordpress-rest-api' ),
	  wp = new WP({ endpoint: 'http://wordpress.api.dev/wp-json' });

let categories = [];

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

	getAll() {
		return categories;
	}
});

AppDispatcher.register(function(payload) {
	let action = payload.action;
	switch(action.type) {

		case ActionTypes.RECEIVE_CATEGORIES:
      categories = action.categories;
      SideBarNavStore.emitChange();
      break;

    default:
  }
});

module.exports = SideBarNavStore;
