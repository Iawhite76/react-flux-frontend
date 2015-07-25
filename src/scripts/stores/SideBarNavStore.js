const AppDispatcher = require('../dispatcher/AppDispatcher'),
			Constants = require('../constants/Constants'),
			ActionTypes = Constants.ActionTypes,
      PageStore = require('./PageStore');


let EventEmitter = require('events').EventEmitter,
	  assign = require('object-assign');

// Underscore because this is a private variable created by the
// module closure
let _navigationMenu = [{title: 'Loading...'}];
let _collapsedPageIDs = {};

function _nodeFromLineage (lineage, nodes) {
  let names = _.clone(lineage);

  if (lineage && nodes) {
    let name = names.shift();
    let node = nodes[name];

    while (node) {
      if (names.length === 0) {
        break;
      } else if (node.children) {
        name = names.shift();
        node = node.children[name];
      } else {
        break;
      }
    }

    return node;
  } else {
    return null;
  }
}

/*
  Convert the flat array structure to a tree of hashes
  this is what TreeMenu will need to draw
*/
function _buildMenu(source, result, opts={}) {
  let tree = _.cloneDeep(source);
  let selectedID = opts.selectedID;
  let collapsedIDs = opts.collapsedIDs;
  let visibleIDs = opts.visibleIDs;

  //build a return value if one wasn't passed in
  result = result || {};

  if (tree && tree.length) {

    let item = tree.shift(); //take first item from the array
    let selected = selectedID && selectedID === item.ID ? true : false;
    let collapsed = collapsedIDs && collapsedIDs[item.ID] ? true : false;

    let visible = (item.children && item.children.length) || visibleIDs.indexOf(item.ID) > -1;

    if (visible) {
      result[item.title] = {
        ID : item.ID,
        selected: selected,
        collapsed: collapsed
      }; //make a new property in the result

      //if there are children, build them recursively
      if (item.children && item.children.length) {
        result[item.title].children = _buildMenu(item.children, null, opts);
      }
    }

    //build additional items recursively, based on the remaining items in the array
    return _buildMenu(tree, result, opts);

  } else {
    //none left, done
    return result;
  }
}

let SideBarNavStore = assign({}, EventEmitter.prototype, {

	emitChange() {
		this.emit('change');
	},

	addChangeListener(callback) {
		this.on('change', callback);
	},

	removeChangeListener(callback) {
		this.removeListener('change', callback);
	},

  getNodeFromLineage(lineage) {
    let nodes = _buildMenu(_navigationMenu);
    return _nodeFromLineage(lineage, nodes);
  },

  getNavigationMenuObject() {
    var searchMatchingPageIDs = _.pluck(PageStore.getPagesMatchingSearchString(), 'ID');

    let menu = _buildMenu(_navigationMenu, null, {
      selectedID: PageStore.getCurrentPageID(),
      collapsedIDs: _collapsedPageIDs,
      visibleIDs: searchMatchingPageIDs
    });
    return menu;
  }

});

SideBarNavStore.dispatchToken = AppDispatcher.register(function(payload) {
	let action = payload.action;
	switch(action.type) {

    case ActionTypes.CLICK_NAVIGATION_EXPAND_COLLAPSE:
      let pageID = action.pageID;
      _collapsedPageIDs[pageID] = !_collapsedPageIDs[pageID];
      if (!_collapsedPageIDs[pageID]) {
        delete _collapsedPageIDs[pageID];
      }
      SideBarNavStore.emitChange();
      break;

    case ActionTypes.RECEIVE_NAVIGATION_MENU_JSON:
      _navigationMenu = action.navigationMenu;
      SideBarNavStore.emitChange();
      break;

    default:
  }
});

module.exports = SideBarNavStore;
