const AppDispatcher = require('../dispatcher/AppDispatcher'),
			WebAPIUtils = require('../utils/WebAPIUtils.js');

let ActionTypes = Constants.ActionTypes;

module.exports = {

	getCategories() {
		AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_CATEGORIES
    });
    WebAPIUtils.loadStories();
	},

	createComment(comment) {
		var action = {
			actionType: "CREATE_COMMENT",
			comment: comment
		};

		AppDispatcher.dispatch(action);
	}
};