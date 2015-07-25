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
  this is what TreeMenu will need to draw, looks like:

  {
    "Item Title": {
      ID: 1,
      selected: false,
      collapsed: false,
      children: {
        "A child": {
          ID: 2,
          selected: false,
          collapsed: false,
        },
        "Another child": {
          ID: 3,
          selected: true,
          collapsed: false,
        }
      }
    }
  }
*/
function _buildMenu(sourceNodeArrays, result, opts={}) {
  let nodeArray = _.cloneDeep(sourceNodeArrays);
  let selectedID = opts.selectedID;
  let collapsedIDs = opts.collapsedIDs;
  let visibleIDs = opts.visibleIDs || [];

  // build a return value if one wasn't passed in
  result = result || {};

  if (nodeArray && nodeArray.length) {
    let node = nodeArray.shift(); // take first node
    let isLeafNode = !node.children || node.children.length === 0;

    let newNode = {
      ID: node.ID
    };

    let isVisible = true;

    if (isLeafNode) {
      newNode.selected = selectedID && selectedID === node.ID ? true : false;
      isVisible = visibleIDs.length === 0 || visibleIDs.indexOf(node.ID) > -1;
    } else { // its a category node!
      newNode.collapsed = collapsedIDs && collapsedIDs[node.ID] ? true : false;
    }

    if (isVisible) {
      result[node.title] = newNode;
    }

    // if there are children, build them recursively
    if (!isLeafNode) {
      result[node.title].children = _buildMenu(node.children, null, opts);

      // if there are no childen, dont show the category node silly!
      if (_.keys(result[node.title].children).length === 0) {
        delete result[node.title]
      }
    }

    // build additional items recursively, based on the remaining items in the array
    return _buildMenu(nodeArray, result, opts);
  } else {
    // none left, done
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
    var searchMatchingPageIDs = _.compact(_.pluck(PageStore.getPagesMatchingSearchString(), 'ID'));

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
