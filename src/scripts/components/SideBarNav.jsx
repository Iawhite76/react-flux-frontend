const React = require('react/addons'),
  TreeMenu = require('../utils/react-tree-menu').TreeMenu,
  TreeNode = require('../utils/react-tree-menu').TreeNode,
  TreeMenuUtils = require('../utils/react-tree-menu').TreeMenuUtils,
  Immutable = require('immutable'),
  _ = require('lodash'),
  JSXView = require('../utils/react-jsx-view'),
  SideBarNavActionCreators = require('../actions/SideBarNavActionCreators'),
  SideBarNavStore = require('../stores/SideBarNavStore'),
  WebAPIUtils = require('../utils/WebAPIUtils');


let CSSTransitionGroup = React.addons.CSSTransitionGroup;

function getStateFromStore() {
  return {
    pages: SideBarNavStore.getPages(),
    searchString: '',
    navigationMenuObject: SideBarNavStore.getNavigationMenu()
  };
}

let SideBarNav = React.createClass({
  onChange() {
    this.setState(getStateFromStore());
  },

  handleChange(e){
    // If you comment out this line, the text box will not change its value.
    // This is because in React, an input cannot change independently of the value
    // that was assigned to it. In our case this is this.state.searchString.

    // this.setState({
    //   pages: SideBarNavStore.getPages(),
    //   searchString:e.target.value
    // });
    // if(this.state.pages.length) {
    //   this.setState({navigationMenuObject: pickDeep(this.state.navigationMenuObject, this.state.pages)})
    // }
    // console.log('handle change');
  },

  getInitialState() {
    return getStateFromStore();
  },

  componentDidMount() {
    WebAPIUtils.loadNavigationMenu();
    SideBarNavStore.addChangeListener(this.onChange);
  },


  render() {

    // let searchString = this.state.searchString.trim().toLowerCase(),
    //     menu = this.state.navigationMenuObject,
    //     pages = this.state.pages;

    // if(searchString.length > 1){
    //   // We are searching. Filter the results.

    //   SideBarNavActionCreators.getPages(searchString);
    // }

    return <div className="col-lg-3">
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search For Keywords" />

                <TreeMenu
                  expandIconClass="fa fa-chevron-right"
                  collapseIconClass="fa fa-chevron-down"
                  onTreeNodeCollapseChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "navigationMenuObject", "collapsed")}
                  onTreeNodeCheckChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "navigationMenuObject","checked")}
                  onTreeNodeSelectChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "navigationMenuObject","selected")}
                  data={this.state.navigationMenuObject} />
            
            </div>;

  },

  _handleDynamicObjectTreeNodePropChange(messageWindowKey, stateKey, propName, lineage) {

    this._setLastActionState(propName, messageWindowKey, lineage);

    //Get a node path that includes children, given a key
    function getNodePath(nodeKey) {

      if (nodeKey.length === 1) return nodeKey;

      return _(nodeKey).zip(nodeKey.map(function () {
        return "children";
      })).flatten().initial().value();

    }

    var oldState = Immutable.fromJS(this.state[stateKey]);
    var nodePath = getNodePath(lineage),
      keyPaths = [nodePath.concat([propName])];

    //Build a list of key paths for all children
    function addChildKeys(state, parentPath) {

      var childrenPath = parentPath.concat('children'),
        children = state.getIn(childrenPath);

      if (!children || children.size === 0) return;

      children.map(function (value, key) {
        keyPaths.push(childrenPath.concat([key, propName]))
        addChildKeys(state, childrenPath.concat([key]));
      });
    }

    addChildKeys(oldState, nodePath);

    //Get the new prop state
    var newPropState = !oldState.getIn(keyPaths[0]);

    //Now create a new map w/ all the changes
    var newState = oldState.withMutations(function(state) {
      keyPaths.forEach(function (keyPath) {
        state.setIn(keyPath, newPropState);
      })
    });

    var mutation = {};

    mutation[stateKey] = newState.toJS();

    this.setState(mutation);

  },

  _setLastActionState(action, col, node) {

    var toggleEvents = ["collapsed", "checked", "selected"];

    if (toggleEvents.indexOf(action) >= 0) {
      action += "Changed";
    }

    console.log("Controller View received tree menu " + action + " action: " + node.join(" > "));

    var key = "lastAction" + col;

    var mutation = {};
    mutation[key] = {
      event: action,
      node: node.join(" > "),
      time: new Date().getTime()
    };

    this.setState(mutation)
  }
});


module.exports = SideBarNav;