jest.dontMock('../PageStore');
jest.dontMock('lodash');
jest.dontMock('object-assign'); // otherwise: Cannot call method 'register' of undefined

describe('PageStore', () => {
  let PageStore, AppDispatcher, dispatchCallback;

  beforeEach(() => {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    PageStore = require('../PageStore');
    // http://facebook.github.io/react/blog/2014/09/24/testing-flux-applications.html
    dispatchCallback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should start in correct state', () => {
    expect(PageStore.getPages()).toEqual({});
    expect(PageStore.getCurrentPageID()).toBe(null);
    expect(PageStore.getSearchString()).toBe('');
    expect(PageStore.getCurrentPage()).toBeUndefined();
    expect(PageStore.getPageBySlug('foo')).toBeUndefined();
    expect(PageStore.getPagesMatchingSearchString()).toEqual([]);
  });

  describe('after RECEIVE_PAGES', () => {
    let pagesArray;

    beforeEach(() => {
      pagesArray = [
        {
          "ID": 15,
          "title": "Design Principle the First",
          "content": "foist",
          "acf": false,
          "slug": "design-principle-the-first"
        },
        {
          "ID": 30,
          "title": "Elements",
          "content": "blah",
          "acf": false,
          "slug": "elements"
        }
      ];

      dispatchCallback({
        action: {
          type: 'RECEIVE_PAGES',
          pagesArray: pagesArray
        }
      });
    });

    it('should RECEIVE_PAGES', () => {
      expect(PageStore.getPages()).toEqual({'15': pagesArray[0], '30': pagesArray[1]});
      expect(PageStore.getCurrentPageID()).toBe(15);
      expect(PageStore.getSearchString()).toBe('');
      expect(PageStore.getCurrentPage()).toEqual(pagesArray[0]);
      expect(PageStore.getPageBySlug('elements')).toEqual(pagesArray[1]);
      expect(PageStore.getPagesMatchingSearchString()).toEqual(pagesArray);
    });

    it('should CLICK_NAVIGATION_NODE', () => {
      dispatchCallback({
        action: {
          type: 'CLICK_NAVIGATION_NODE',
          pageID: 30
        }
      });

      expect(PageStore.getCurrentPageID()).toBe(30);
      expect(PageStore.getCurrentPage()).toEqual(pagesArray[1]);
      expect(PageStore.getPagesMatchingSearchString()).toEqual(pagesArray);
    });

    it('should SEARCH_STRING_CHANGED', () => {
      dispatchCallback({
        action: {
          type: 'SEARCH_STRING_CHANGED',
          searchString: 'bla'
        }
      });

      expect(PageStore.getCurrentPageID()).toBe(15);
      expect(PageStore.getSearchString()).toBe('bla');
      expect(PageStore.getCurrentPage()).toEqual(pagesArray[0]);
      expect(PageStore.getPagesMatchingSearchString()).toEqual([pagesArray[1]]);
    });

  });


});