const React = require('react'),
      SideBarNav = require('./SideBarNav.jsx'),
      PageContent = require('./PageContent.jsx'),
      PageStore = require('../stores/PageStore'),
      SideBarNavActionCreators = require('../actions/SideBarNavActionCreators'),
      NavDrawerParent = require('./NavDrawerParent.jsx');



function getStateFromStore() {
  return {
    page: PageStore.getCurrentPage()
  };
}


let PageBrowsingApp = React.createClass({

  getInitialState() {
    return getStateFromStore();
  },

  componentDidMount() {
    window.addEventListener('hashchange', this._onHashChange);
    PageStore.addChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getStateFromStore());
  },

  _onHashChange() {
    let slug = window.location.hash.split('#')[1];
    let page = PageStore.getPageBySlug(slug);
    let pageID = page ? page.ID : null;
    SideBarNavActionCreators.clickNavNode(pageID);
  },

  render: function() {
    let page = this.state.page;
    if (page) {
      window.location.hash = '#' + this.state.page.slug;
    }

    return (
      <div id="wrapper">
    
       <NavDrawerParent />
       
       <PageContent />
       
      </div>
    );
  }
});

module.exports = PageBrowsingApp;