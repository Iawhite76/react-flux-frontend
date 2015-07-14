const AppDispatcher = require('../dispatcher/AppDispatcher.js'),
      Constants = require('../constants/Constants.js');

let ActionTypes = Constants.ActionTypes;

module.exports = {

  receiveCategories(categories) {
    AppDispatcher.handleServerAction({
      // type: ActionTypes.RECEIVE_CATEGORIES,
      type: "RECEIVE_CATEGORIES",
      categories: categories
    });

  },

  receiveCategoriesJson(categories) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CATEGORIES,
      categories: categories
    });
  }

};
