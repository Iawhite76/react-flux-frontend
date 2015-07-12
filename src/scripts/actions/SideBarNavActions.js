const AppDispatcher = require('../dispatcher/AppDispatcher');


module.exports = {

	createComment: function(comment) {
		var action = {
			actionType: "CREATE_COMMENT",
			comment: comment
		};

		AppDispatcher.dispatch(action);
	}
};