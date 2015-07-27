jest.dontMock('../SideBarNavStore');
jest.dontMock('lodash');
jest.dontMock('object-assign'); // otherwise: Cannot call method 'register' of undefined

describe('SideBarNavStore', () => {
  let SideBarNavStore, AppDispatcher, dispatchCallback;

  beforeEach(() => {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    SideBarNavStore = require('../SideBarNavStore');
    dispatchCallback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should start in correct state', () => {
    expect(SideBarNavStore.getNodeFromLineage([])).toEqual(null);
    expect(SideBarNavStore.getNodeFromLineage(['Loading...'])).toEqual({
      ID: 0,
      selected: false
    });
    expect(SideBarNavStore.getNavigationMenuObject()).toEqual({
      'Loading...': {
        ID: 0,
        selected: false
      }
    });
  });

  describe('after RECEIVE_NAVIGATION_MENU_JSON', () => {
    let menuArray = [
      {
        ID: 2,
        title: 'Home',
        children: [
          {ID: 3, title: 'Child 1'}
        ]
      }
    ];

    beforeEach(() => {
      dispatchCallback({
        action: {
          type: 'RECEIVE_NAVIGATION_MENU_JSON',
          navigationMenu: menuArray
        }
      });
    });

    it('should RECEIVE_NAVIGATION_MENU_JSON', () => {
      expect(SideBarNavStore.getNodeFromLineage(['Home', 'Child 1']).ID).toEqual(3);
      expect(SideBarNavStore.getNodeFromLineage(['Loading...'])).toBeUndefined();

      let nothingSelected = {
        Home: {
          ID: 2,
          children: {
            "Child 1": {
              ID: 3,
              selected: false
            }
          },
          collapsed: false
        }
      };

      expect(SideBarNavStore.getNavigationMenuObject()).toEqual(nothingSelected);
    });

    it('should CLICK_NAVIGATION_EXPAND_COLLAPSE', () => {
      dispatchCallback({
        action: {
          type: 'CLICK_NAVIGATION_EXPAND_COLLAPSE',
          pageID: 2
        }
      });

      let homeCollapsed = {
        Home: {
          ID: 2,
          children: {
            "Child 1": {
              ID: 3,
              selected: false
            }
          },
          collapsed: true
        }
      };

      expect(SideBarNavStore.getNavigationMenuObject()).toEqual(homeCollapsed);
    });

  });

});