var React = require('react/addons'),
  TreeMenu = require('../utils/react-tree-menu').TreeMenu,
  TreeNode = require('../utils/react-tree-menu').TreeNode,
  TreeMenuUtils = require('../utils/react-tree-menu').TreeMenuUtils,
  Immutable = require('immutable'),
  _ = require('lodash'),
  JSXView = require('../utils/react-jsx-view');

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var TreeView = React.createClass({

  getInitialState: function() {
    return {
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
            "Visual Guidelines": {
              checkbox: false,
              children: {
                "Sub-Sub Option 1" : {
                  selected: false,
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
            "Sub-Sub Option 1" : {
              checkbox: false,
              ID: 22
            },
            "Sub-Sub Option 2" : {
              checkbox: false,
              ID: 14
            }
          }
        },
        "mDot" : {
          checkbox: false,
          children: {
            "Overview" : {
              checkbox: false,
              ID: 19
            },
            "Sub-Sub Option 2" : {
              checkbox: false,
              ID: 90
            }
          }
        }
      }

    };
  },

  render: function() {

    
    var dynamicExample3 = <TreeMenu
        expandIconClass="fa fa-chevron-right"
        collapseIconClass="fa fa-chevron-down"
        onTreeNodeCollapseChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2", "collapsed")}
        onTreeNodeCheckChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2","checked")}
        onTreeNodeSelectChange={this._handleDynamicObjectTreeNodePropChange.bind(this, 6, "dynamicTreeDataMap2","selected")}
        data={this.state.dynamicTreeDataMap2} />
    );


    return <div className="container">


      <div className="row">
       
        <div className="col-lg-3">
          {dynamicExample3}
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