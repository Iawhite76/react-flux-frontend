var keyMirror = require('react/lib/keyMirror');

var APIRoot = "http://wordpress.api.dev/wp-json";

module.exports = {

  APIEndpoints: {
    // LOGIN:          APIRoot + "/v1/login",
    // REGISTRATION:   APIRoot + "/v1/users",
    // STORIES:        APIRoot + "/v1/stories"
    POSTS_BY_CATEGORY_HOME:   APIRoot + '/posts?filter[category_name]=home'
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
    LOAD_CATEGORIES: null,
    RECEIVE_CATEGORIES: null
  })

};
