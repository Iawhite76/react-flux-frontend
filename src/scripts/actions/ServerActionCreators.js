const AppDispatcher = require('../dispatcher/AppDispatcher.js'),
      Constants = require('../constants/Constants.js');

let ActionTypes = Constants.ActionTypes;

module.exports = {

  receiveNavigationMenuJSON(navigationMenu) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_NAVIGATION_MENU_JSON,
      navigationMenu: navigationMenu
    });
  },

  receivePagesJsonArray(pagesArray) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_PAGES_ARRAY,
      pagesArray: pagesArray
    });
  }

};
