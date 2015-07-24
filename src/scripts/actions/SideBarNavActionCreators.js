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

  clickNavExpandCollapse(lineage) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLICK_NAVIGATION_EXPAND_COLLAPSE,
      lineage: lineage
    });
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
