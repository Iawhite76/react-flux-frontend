const AppDispatcher = require('../dispatcher/AppDispatcher.js'),
      Constants = require('../constants/Constants.js'),
      WebAPIUtils = require('../utils/WebAPIUtils.js');


let ActionTypes = Constants.ActionTypes;

module.exports = {

  getPages(query) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_PAGES,
      query: query
    });
    WebAPIUtils.loadPages(query);
  },

  getNavigationMenu() {
  	AppDispatcher.handleViewAction({
  	  type: ActionTypes.LOAD_NAVIGATION_MENU
  	});
  	WebAPIUtils.loadNavigationMenu();
  },

  updateSearchString(searchString) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.UPDATE_SEARCH_STRING,
      searchString: searchString
    });

    if (searchString.length > 3 || !searchString.length) {
      WebAPIUtils.loadPages(searchString);
    }
  },

  clearSearch() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLEAR_SEARCH
    })
  },

};
