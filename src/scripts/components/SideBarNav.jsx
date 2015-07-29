const React = require('react/addons'),
  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
  TreeMenu = require('../utils/react-tree-menu').TreeMenu,
  TreeNode = require('../utils/react-tree-menu').TreeNode,
  SideBarNavStore = require('../stores/SideBarNavStore'),
  PageStore = require('../stores/PageStore'),
  SearchInput = require('./SearchInput.jsx'),
  WebAPIUtils = require('../utils/WebAPIUtils'),
  SideBarNavActionCreators = require('../actions/SideBarNavActionCreators');

let upsLogo = require('../../assets/images/UPS_logo.svg');

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
    SideBarNavStore.addChangeListener(this._onChange);
    PageStore.addChangeListener(this._onChange);
  },

  render() {
    var sidebar = null;
    // if (this.props.open) {
    //   sidebar = <div className="drawer">hello</div>;
    // }
  
    // if (this.props.open) {
    //   sidebar = <div id="sidebar" className="col-lg-3">
         
    //               <div id="sidebar_inner">

    //                   <SearchInput searchString={this.state.searchString} />

    //                   <TreeMenu
    //                     expandIconClass="fa fa-chevron-right"
    //                     collapseIconClass="fa fa-chevron-down"
    //                     onTreeNodeCollapseChange={this._onCollapseChange}
    //                     onTreeNodeSelectChange={this._onSelectChange}
    //                     data={this.state.navigationMenuObject} />

    //               </div>

    //         </div>;
    // }
    if (this.props.open) {
      sidebar =   <div id="sidebar_inner" className="drawer">

                      <SearchInput searchString={this.state.searchString} />

                      <TreeMenu
                        expandIconClass="fa fa-chevron-right"
                        collapseIconClass="fa fa-chevron-down"
                        onTreeNodeCollapseChange={this._onCollapseChange}
                        onTreeNodeSelectChange={this._onSelectChange}
                        data={this.state.navigationMenuObject} />

                  </div>
    }
    return  <ReactCSSTransitionGroup transitionName="drawer">
              {sidebar}
            </ReactCSSTransitionGroup>;

  },

  _onCollapseChange(lineage) {
    let node = SideBarNavStore.getNodeFromLineage(lineage);
    if (node) {
      SideBarNavActionCreators.clickNavExpandCollapse(node.ID);
    }
  },

  _onSelectChange(lineage) {
    let node = SideBarNavStore.getNodeFromLineage(lineage);
    if (node && node.ID !== PageStore.getCurrentPageID() && !node.children) {
      SideBarNavActionCreators.clickNavNode(node.ID);
    }
  }
});


module.exports = SideBarNav;