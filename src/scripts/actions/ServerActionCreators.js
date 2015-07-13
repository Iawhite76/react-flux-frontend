const AppDispatcher = require('../dispatcher/AppDispatcher.js'),
      Constants = require('../constants/Constants.js');

let ActionTypes = Constants.ActionTypes;

module.exports = {

  receiveCategories: function(categories) {
    AppDispatcher.handleServerAction({
      // type: ActionTypes.RECEIVE_CATEGORIES,
      type: "RECEIVE_CATEGORIES",
      categories: categories
    });

    // var action = {
    //   actionType: "RECEIVE_CATEGORIES",
    //   categories: categories
    // };

    // AppDispatcher.dispatch(action);

  },

};
