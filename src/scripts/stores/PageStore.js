const AppDispatcher = require('../dispatcher/AppDispatcher'),
      Constants = require('../constants/Constants'),
      ActionTypes = Constants.ActionTypes;


let EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

// pages keyed by id
let _pages = {};
let _currentPageSlug = null;

let PageStore = assign({}, EventEmitter.prototype, {

  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  getPages() {
    return _pages;
  },

  getCurrentPage() {
    if (_currentPageSlug) {
      // traverse the arrary and return the page if you find it
    } else {
      return null;
    }
  }

});

PageStore.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.type) {

    case ActionTypes.RECEIVE_NAVIGATION_MENU_JSON:
      _pages = action.pagesArrary;
      PageStore.emitChange();
      break;

    default:
  }
});

module.exports = PageStore;
