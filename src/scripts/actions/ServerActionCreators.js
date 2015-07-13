const AppDispatcher = require('../dispatcher/AppDispatcher.js'),
      Constants = require('../constants/Constants.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  receiveCategories: function(categories) {
    // AppDispatcher.handleServerAction({
    //   actionType: "RECEIVE_CATEGORIES,
    //   data: data
    // });

    var action = {
      actionType: "RECEIVE_CATEGORIES",
      categories: categories
    };

    AppDispatcher.dispatch(action);

  },

};
