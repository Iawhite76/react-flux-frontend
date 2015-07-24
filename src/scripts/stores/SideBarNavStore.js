const AppDispatcher = require('../dispatcher/AppDispatcher'),
			Constants = require('../constants/Constants'),
			ActionTypes = Constants.ActionTypes;


let EventEmitter = require('events').EventEmitter,
	  assign = require('object-assign');

// Underscore because this is a private variable created by the
// module closure
let _navigationMenu = [{title: 'Loading...'}];
let _searchString = '';
let _selectedPageID = null;
let _collapsedNodeKeys = {};

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


function _collapseNodes(collapsedNodeLineages, nodes) {
  let nodeLineages = _.cloneDeep(collapsedNodeLineages);

  if (nodeLineages && nodes) {
    nodeLineages.forEach(lineage => {
      let node = _nodeFromLineage(lineage, nodes);
      if (node && node.children) {
        node.collapsed = true;
      }
    });

    return nodes;
  } else {
    return menu;
  }
}

function _getCollapsedNodeLineages() {
  return _.keys(_collapsedNodeKeys).map(key => {
    return key.split('__')
  });
}

/*
  Convert the flat array structure to a tree of hashes
  this is what TreeMenu will need to draw
*/
function _buildMenu(source, result, selectedID) {
  let tree = _.cloneDeep(source);

  //build a return value if one wasn't passed in
  result = result || {};

  if (tree && tree.length) {

    var item = tree.shift(); //take first item from the array
    result[item.title] = {
      ID : item.ID,
      selected: selectedID && selectedID === item.ID ? true : false
    }; //make a new property in the result

    //if there are children, build them recursively
    if (item.children && item.children.length) {
      result[item.title].children = _buildMenu(item.children, null, selectedID);
    }

    //build additional items recursively, based on the remaining items in the array
    return _buildMenu(tree, result, selectedID);

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

	getSearchString() {
		return _searchString;
	},

  getNodeFromLineage(lineage) {
    let nodes = _buildMenu(_navigationMenu);
    return _nodeFromLineage(lineage, nodes);
  },

  getNavigationMenuObject() {
    let menu = _buildMenu(_navigationMenu, null, _selectedPageID);
    menu = _collapseNodes(_getCollapsedNodeLineages(), menu);
    return menu;
  }

});

SideBarNavStore.dispatchToken = AppDispatcher.register(function(payload) {
	let action = payload.action;
	switch(action.type) {

    case ActionTypes.CLICK_NAVIGATION_NODE:
      _selectedPageID = action.pageID;
      SideBarNavStore.emitChange();
      break;

    case ActionTypes.CLICK_NAVIGATION_EXPAND_COLLAPSE:
      let key = action.lineage.join('__');
      _collapsedNodeKeys[key] = !_collapsedNodeKeys[key];
      if (!_collapsedNodeKeys[key]) {
        delete _collapsedNodeKeys[key];
      }
      SideBarNavStore.emitChange();
      break;

    case ActionTypes.RECEIVE_NAVIGATION_MENU_JSON:
      _navigationMenu = action.navigationMenu;
      SideBarNavStore.emitChange();
      break;

		case ActionTypes.UPDATE_SEARCH_STRING:
			_searchString = action.searchString;
      SideBarNavStore.emitChange();
      break;

    case ActionTypes.CLEAR_SEARCH:
    	_searchString = '';
      SideBarNavStore.emitChange();
      break;

    default:
  }
});

module.exports = SideBarNavStore;
