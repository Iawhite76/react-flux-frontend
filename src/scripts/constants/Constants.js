let keyMirror = require('react/lib/keyMirror');

const APIRoot = "http://mobilestyle.ups.dev";

module.exports = {

  APIEndpoints: {
    ALL_PAGES_ENDPOINT:   APIRoot + '/search-results/?pagesSearch=all',
    WP_JSON: APIRoot + '/wp-json',
    WP_MAIN_NAV_MENU: '/menu-locations/primary_navigation',
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Pages
    RECEIVE_PAGES: null,

    // Nav menu
    RECEIVE_NAVIGATION_MENU_JSON: null,
    LOAD_NAVIGATION_MENU: null,
    CLICK_NAVIGATION_NODE: null,
    CLICK_NAVIGATION_EXPAND_COLLAPSE: null,

    // Search
    UPDATE_SEARCH_STRING: null,
    CLEAR_SEARCH: null,
  })

};
