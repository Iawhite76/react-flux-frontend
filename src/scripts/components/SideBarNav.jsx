const React = require('react/addons'),
  TreeMenu = require('../utils/react-tree-menu').TreeMenu,
  TreeNode = require('../utils/react-tree-menu').TreeNode,
  _ = require('lodash'),
  SideBarNavStore = require('../stores/SideBarNavStore'),
  SearchInput = require('./SearchInput.jsx'),
  WebAPIUtils = require('../utils/WebAPIUtils'),
  pickDeep = require('../utils/Utils').pickDeep,
  buildMenu = require('../utils/Utils').buildMenu,
  SideBarNavActionCreators = require('../actions/SideBarNavActionCreators');

let CSSTransitionGroup = React.addons.CSSTransitionGroup;

function getStateFromStore() {
  return {
    pages: SideBarNavStore.getPages(),
    searchString: SideBarNavStore.getSearchString(),
    navigationMenuObject: _.cloneDeep(SideBarNavStore.getNavigationMenu()),
    selectedLineage: SideBarNavStore.getSelectedLineage(),
    collapsedNodeLineages: SideBarNavStore.getCollapsedNodeLineages()
  };
}

let SideBarNav = React.createClass({
  _onChange() {
    this.setState(getStateFromStore());
  },

  getInitialState() {
    return getStateFromStore();
  },

  componentDidMount() {
    SideBarNavStore.addChangeListener(this._onChange);
  },


  render() {

    let menu = buildMenu(this.state.navigationMenuObject),
        pages = this.state.pages;

        menu = pickDeep(menu, pages);
        menu = this._collapseNodes(this.state.collapsedNodeLineages, menu);
        menu = this._makeNodeSelected(this.state.selectedLineage, menu);
        console.log(menu);
    return <div className="col-lg-3">
                <SearchInput searchString={this.state.searchString} />

                <TreeMenu
                  expandIconClass="fa fa-chevron-right"
                  collapseIconClass="fa fa-chevron-down"
                  onTreeNodeCollapseChange={this._onCollapseChange}
                  onTreeNodeSelectChange={this._onSelectChange}
                  data={menu} />

            </div>;

  },

  _onCollapseChange(lineage) {
    SideBarNavActionCreators.clickNavExpandCollapse(lineage);
  },

  _onSelectChange(lineage) {
    SideBarNavActionCreators.clickNavNode(lineage);
  },

  _nodeFromLineage(lineage, nodes) {
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
  },

  _makeNodeSelected(lineage, menu) {
    let nodes = _.cloneDeep(menu);
    if (lineage && nodes) {
      let node = this._nodeFromLineage(lineage, nodes);
      if (node && !node.children) {
        node.selected = true;
      }
      return nodes;
    } else {
      return menu;
    }
  },

  _collapseNodes(collapsedNodeLineages, menu) {
    let nodeLineages = _.cloneDeep(collapsedNodeLineages);
    let nodes = _.cloneDeep(menu);

    if (nodeLineages && nodes) {
      nodeLineages.forEach(lineage => {
        let node = this._nodeFromLineage(lineage, nodes);
        if (node && node.children) {
          node.collapsed = true;
        }
      });

      return nodes;
    } else {
      return menu;
    }
  }

});


module.exports = SideBarNav;