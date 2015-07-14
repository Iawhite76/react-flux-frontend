require('bootstrap-webpack');
require('../assets/stylesheets/style.styl');

// TODO: Require assets here.
// require('../assets/images/product.png');

const React = require('react'),
			SideBarNav = require('./components/SideBarNav'),
			Content = require('./components/Content'),
      TreeView = require('./components/TreeView.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <SideBarNav />
        <Content />
        <TreeView />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('main'));
