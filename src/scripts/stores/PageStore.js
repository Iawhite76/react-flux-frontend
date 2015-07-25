const AppDispatcher = require('../dispatcher/AppDispatcher'),
      Constants = require('../constants/Constants'),
      ActionTypes = Constants.ActionTypes,
      _ = require('lodash');


let EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

// pages keyed by ID
let _pages = {};
let _currentPageID = null;
let _searchString = '';

function _addPages (array) {
  array.forEach((page) => {
    _pages[page.ID] = page;
  });
}

function _setInitialPage () {
  let slug = window.location.hash.split('#')[1];
  if (slug && slug.length) {
    let page = PageStore.getPageBySlug(slug);
    if (page) {
      _currentPageID = page.ID;
    }
  } else  {
    _currentPageID = 15;
  }
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

  getCurrentPageID() {
    return _currentPageID;
  },

  getCurrentPage() {
    return _pages[_currentPageID];
  },

  getPageBySlug(slug) {
    return _.find(_pages, (page) => {
      return page.slug === slug;
    });
  },

  getSearchString() {
    return _searchString;
  },

  getPagesMatchingSearchString() {
    var q = (_searchString || '').toLowerCase();
    return _.filter(_.values(_pages), (page) => {
      return page.title.toLowerCase().indexOf(q) > -1 || page.content.toLowerCase().indexOf(q) > -1;
    });
  }
});

PageStore.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.type) {

    case ActionTypes.RECEIVE_PAGES:
      _addPages(action.pagesArray);
      _setInitialPage();
      PageStore.emitChange();
      break;

    case ActionTypes.CLICK_NAVIGATION_NODE:
      _currentPageID = action.pageID;
      PageStore.emitChange();

    case ActionTypes.SEARCH_STRING_CHANGED:
      _searchString = action.searchString;
      PageStore.emitChange();
      break;

    default:
  }
});

module.exports = PageStore;
