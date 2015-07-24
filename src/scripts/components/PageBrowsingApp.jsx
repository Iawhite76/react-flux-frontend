const React = require('react'),
      SideBarNav = require('./SideBarNav.jsx'),
      PageContent = require('./PageContent');

let PageBrowsingApp = React.createClass({

  render: function() {
    return (
      <div>
       <SideBarNav />
       <PageContent />
      </div>
    );
  }
});

module.exports = PageBrowsingApp;