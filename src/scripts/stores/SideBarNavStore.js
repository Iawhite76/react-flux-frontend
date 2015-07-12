const AppDispatcher = require('../dispatcher/AppDispatcher');

let EventEmitter = require('events').EventEmitter,
	  assign = require('object-assign'),
	  WP = require( 'wordpress-rest-api' ),
	  wp = new WP({ endpoint: 'http://wordpress.api.dev/wp-json' });

let comments = wp.categories().get(function( err, data ) {
	    if ( err ) {
	        // handle err 
	        console.log(err);
	    }
		    // do something with the returned posts 
		    return data
		});
console.log(comments);

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
