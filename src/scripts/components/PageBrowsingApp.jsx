const React = require('react'),
      SideBarNav = require('./SideBarNav.jsx'),
      PageContent = require('./PageContent.jsx'),
      PageStore = require('../stores/PageStore'),
      SideBarNavActionCreators = require('../actions/SideBarNavActionCreators'),
      NavDrawerParent = require('./NavDrawerParent.jsx'),
      Reactable = require('reactable'),
      ConsolidatedChangeLog = require('./ConsolidatedChangeLog.jsx');



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
      <ConsolidatedChangeLog className="table" data={[
        {Date: '5\/26\/15', Section: 'Getting Started', 'Change Details': 'Update to capitalization rules across platforms (SDC email).'},
        {Date: '5\/24\/15', Section: 'Apple', 'Change Details': 'Required fields rule updated across platforms (5\/23 meeting).'},
        {Date: '4\/17\/15', Section: 'Getting Started', 'Change Details': 'Changes made to button UI (ER 1600 review).'},
        {Date: '2\/14\/15', Section: 'Zoinkers', 'Change Details': 'It&#039;s valentine&#039;s day, y&#039;allll'}
    ]} itemsPerPage={2} 
        sortable={true} 
        defaultSort={{column: 'Date', direction: 'desc'}, {column: 'Section', direction: 'asc'}} />
       <NavDrawerParent />
       
       <PageContent />
       
      </div>
    );
  }
});

module.exports = PageBrowsingApp;