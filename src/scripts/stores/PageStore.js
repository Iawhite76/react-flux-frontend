const AppDispatcher = require('../dispatcher/AppDispatcher'),
      Constants = require('../constants/Constants'),
      ActionTypes = Constants.ActionTypes,
      _ = require('lodash');


let EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

// pages keyed by ID
let _pages = {
  '15': {
    title: '',
    content: 'Loading....'
  }
};
let _currentPageID = 15;

function _addPages (array) {
  array.forEach((page) => {
    _pages[page.ID] = page;
  });
}

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
    return _pages[_currentPageID];
  },

  getPageBySlug(slug) {
    return _.find(_pages, (page) => {
      return page.slug === slug;
    });
  }
});

PageStore.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.type) {

    case ActionTypes.RECEIVE_PAGES:
      _addPages(action.pagesArray);
      PageStore.emitChange();
      break;

    case ActionTypes.CLICK_NAVIGATION_NODE:
      _currentPageID = action.pageID;
      PageStore.emitChange();
    default:
  }
});

module.exports = PageStore;
