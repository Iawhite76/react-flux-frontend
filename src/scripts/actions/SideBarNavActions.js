const AppDispatcher = require('../dispatcher/AppDispatcher'),
			WebAPIUtils = require('../utils/WebAPIUtils.js'),
			Constants = require('../constants/Constants');

let ActionTypes = Constants.ActionTypes;

module.exports = {

	getCategories() {
		AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_CATEGORIES
    });
    WebAPIUtils.loadCategories();
	},

	createComment(comment) {
		var action = {
			actionType: "CREATE_COMMENT",
			comment: comment
		};

		AppDispatcher.dispatch(action);
	}
};