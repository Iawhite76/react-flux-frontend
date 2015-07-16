let keyMirror = require('react/lib/keyMirror');

const APIRoot = "http://mobilestyle.ups.dev";

module.exports = {

  APIEndpoints: {
    // LOGIN:          APIRoot + "/v1/login",
    // REGISTRATION:   APIRoot + "/v1/users",
    // STORIES:        APIRoot + "/v1/stories"
    QUERY_ROOT:   APIRoot + '/search-results/?ajaxSearch=',
    WP_JSON: APIRoot + '/wp-json',
    WP_MAIN_NAV_MENU: '/menu-locations/primary_navigation',
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Session
    // LOGIN_REQUEST: null,
    // LOGIN_RESPONSE: null,

    // Routes
    // REDIRECT: null,

    // LOAD_STORIES: null,
    // RECEIVE_STORIES: null,
    // LOAD_STORY: null,
    // RECEIVE_STORY: null,
    // CREATE_STORY: null,
    // RECEIVE_CREATED_STORY: null
   

    // Pages
    RECEIVE_PAGES: null,
    RECEIVE_PAGES_ARRAY: null,
  })

};
