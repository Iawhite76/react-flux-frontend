const AppDispatcher = require('../dispatcher/AppDispatcher.js'),
      Constants = require('../constants/Constants.js'),
      WebAPIUtils = require('../utils/WebAPIUtils.js');


let ActionTypes = Constants.ActionTypes;

module.exports = {

  clickNavNode(pageID) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLICK_NAVIGATION_NODE,
      pageID: pageID
    });
  },

  clickNavExpandCollapse(pageID) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLICK_NAVIGATION_EXPAND_COLLAPSE,
      pageID: pageID
    });
  },

  updateSearchString(searchString) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.SEARCH_STRING_CHANGED,
      searchString: searchString
    });
  }

};
