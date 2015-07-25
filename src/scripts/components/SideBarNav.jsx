const React = require('react/addons'),
  TreeMenu = require('../utils/react-tree-menu').TreeMenu,
  TreeNode = require('../utils/react-tree-menu').TreeNode,
  SideBarNavStore = require('../stores/SideBarNavStore'),
  PageStore = require('../stores/PageStore'),
  SearchInput = require('./SearchInput.jsx'),
  WebAPIUtils = require('../utils/WebAPIUtils'),
  SideBarNavActionCreators = require('../actions/SideBarNavActionCreators');

let CSSTransitionGroup = React.addons.CSSTransitionGroup;

function getStateFromStore() {
  return {
    searchString: PageStore.getSearchString(),
    navigationMenuObject: SideBarNavStore.getNavigationMenuObject(),
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
    // TODO: remove SideBarNavStore alltogether and only have a page store
    SideBarNavStore.addChangeListener(this._onChange);
    PageStore.addChangeListener(this._onChange);
  },

  render() {
    return <div className="col-lg-3">
                <SearchInput searchString={this.state.searchString} />

                <TreeMenu
                  expandIconClass="fa fa-chevron-right"
                  collapseIconClass="fa fa-chevron-down"
                  onTreeNodeCollapseChange={this._onCollapseChange}
                  onTreeNodeSelectChange={this._onSelectChange}
                  data={this.state.navigationMenuObject} />

            </div>;

  },

  _onCollapseChange(lineage) {
    let node = SideBarNavStore.getNodeFromLineage(lineage);
    if (node) {
      SideBarNavActionCreators.clickNavExpandCollapse(node.ID);
    }
  },

  _onSelectChange(lineage) {
    let node = SideBarNavStore.getNodeFromLineage(lineage);
    if (node && node.ID !== PageStore.getCurrentPageID()) {
      SideBarNavActionCreators.clickNavNode(node.ID);
    }
  }
});


module.exports = SideBarNav;