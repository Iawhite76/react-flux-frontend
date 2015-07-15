const React = require('react/addons'),
  TreeMenu = require('../utils/react-tree-menu').TreeMenu,
  TreeNode = require('../utils/react-tree-menu').TreeNode,
  TreeMenuUtils = require('../utils/react-tree-menu').TreeMenuUtils,
  Immutable = require('immutable'),
  _ = require('lodash'),
  JSXView = require('../utils/react-jsx-view'),
  pickDeep = require('../utils/Utils').pickDeep,
  TreeViewActionCreators = require('../actions/TreeViewActionCreators'),
  TreeViewStore = require('../stores/TreeViewStore');

let CSSTransitionGroup = React.addons.CSSTransitionGroup;

function _getStateFromStore() {
  return {
    pages: TreeViewStore.getPages()
  }
}

let TreeView = React.createClass({
  
  handleChange: function(e){
    // If you comment out this line, the text box will not change its value.
    // This is because in React, an input cannot change independently of the value
    // that was assigned to it. In our case this is this.state.searchString.

    this.setState({searchString:e.target.value});
    this.setState({pages: TreeViewStore.getPages()});
  },

  getInitialState: function() {
    return {
      pages: [],
      searchString: '',
      dynamicTreeDataMap2: {
        "Home" : {
          checkbox: false,
          ID: 1,
          children: {
            "Getting Started" : {
              checkbox: false,
              ID: 47,
              slug: 'getting-started',
            },
            "Interaction Design Principles": {
              checkbox: false,
              children: {
                "Design Principle the First" : {
                  selected: true,
                  checkbox: false,
                  ID: 67
                }
              }
            }
          }
        },
        "UPS Mobile (iOs, Android)" : {
          checkbox: false,
          children: {
            "Overview" : {
              checkbox: false,
              ID: 22
            },
            "Reference" : {
              checkbox: false,
              ID: 14
            }
          }
        },
        "mDot" : {
          checkbox: false,
          children: {
            "Elements" : {
              checkbox: false,
              ID: 19,
              children: {
                "Navigation" : {
                  checkbox: false,
                  ID: 90
                }
              }
            },
          }
        }
      }

    };
  },

  // componentDidMount() {
  //   TreeViewStore.addChangeListener(this.change);
  // },

  // componentWillUnmount() {
  //   TreeViewStore.removeChangeListener(this.handleChange);
  // },

  render: function() {

    let searchString = this.state.searchString.trim().toLowerCase(),
        dynamicExample3 = this._getExamplePanel("Selection w/o Checkboxes", this._getDynamicTreeExample3()),
        menu = this.state.dynamicTreeDataMap2,
        pages = this.state.pages;

    if(searchString.length > 0){
      // We are searching. Filter the results.

      // menu = pickDeep(menu, function(value, key, object) {
      //   return key.toLowerCase().match(searchString);
      // });
     console.log('state');
      console.log(this.state);
      TreeViewActionCreators.getPages(searchString);
      menu = pickDeep(menu, pages);
    }

    return <div className="container">


      <div className="row">
       
        <div className="col-lg-3">
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search For Keywords" />

            <TreeMenu
              expandIconClass="fa fa-chevron-right"
              collapseIconClass="fa fa-chevron-down"
              onTreeNodeCollapseChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2", "collapsed")}
              onTreeNodeCheckChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2","checked")}
              onTreeNodeSelectChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2","selected")}
              data={menu} />
        
        </div>
       
      </div>

    
    </div>;

  },

  _getDynamicTreeExample3: function () {

    return  (
      <TreeMenu
        expandIconClass="fa fa-chevron-right"
        collapseIconClass="fa fa-chevron-down"
        onTreeNodeCollapseChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2", "collapsed")}
        onTreeNodeCheckChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2","checked")}
        onTreeNodeSelectChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2","selected")}
        data={this.state.dynamicTreeDataMap2} />
    );

  },

  _getExamplePanel: function (title, treeMenuNode) {
    return <div>
      <div className="panel panel-default">
        <div className="panel-heading">{title + " Menu"}</div>
        <div className="panel-body">
          {treeMenuNode}
        </div>
      </div>
    </div>;
  },

  _handleDynamicObjectTreeNodePropChange: function (messageWindowKey, stateKey, propName, lineage) {

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

  _setLastActionState: function (action, col, node) {

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


module.exports = TreeView;