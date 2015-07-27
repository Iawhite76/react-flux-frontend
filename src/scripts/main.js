require('bootstrap-webpack');
require('../assets/stylesheets/global-style.styl');

// TODO: Require assets here.
// require('../assets/images/product.png');

const React = require('react'),
      WebAPIUtils = require('./utils/WebAPIUtils'),
      PageBrowsingApp = require('./components/PageBrowsingApp.jsx');

WebAPIUtils.loadNavigationMenu();
WebAPIUtils.loadAllPages();

React.render(
  <PageBrowsingApp />,
  document.getElementById('main')
);