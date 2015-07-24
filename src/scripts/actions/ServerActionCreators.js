const AppDispatcher = require('../dispatcher/AppDispatcher.js'),
      Constants = require('../constants/Constants.js');

let ActionTypes = Constants.ActionTypes;

module.exports = {

  receiveNavigationMenuJSON(navigationMenu) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_NAVIGATION_MENU_JSON,
      navigationMenu: navigationMenu
    });
  },

  receivePages(pagesArray) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_PAGES,
      pagesArray: pagesArray
    });
  }

};
