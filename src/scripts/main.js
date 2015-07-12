require('bootstrap-webpack');
require('../assets/stylesheets/style.styl');

// TODO: Require assets here.
// require('../assets/images/product.png');

import React from 'react';
import SideBarNav from './components/SideBarNav';

var App = React.createClass({

  render: function() {
    return (
      <div>
        <SideBarNav />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('main'));
