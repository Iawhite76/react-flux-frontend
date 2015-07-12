const AppDispatcher = require('../dispatcher/AppDispatcher');

let EventEmitter = require('events').EventEmitter,
	  assign = require('object-assign');

let comments = [{text: 'some comment'}];

const SideBarNavStore = assign({}, EventEmitter.prototype, {

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
		return comments;
	}
});

AppDispatcher.register(function(action) {
	switch(action.actionType) {

    case "CREATE_COMMENT":
      comments.push(action.comment);
      SideBarNavStore.emitChange();
      break;

    default:
  }
});

module.exports = SideBarNavStore;
