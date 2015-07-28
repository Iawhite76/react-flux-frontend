const React = require('react'),
      PageStore = require('../stores/PageStore'),
      ChangeLog = require('./ChangeLog.jsx'),
      MobileTabs = require('./MobileTabs.jsx');

function getStateFromStore() {
  return {
    page: PageStore.getCurrentPage()
  };
}

let PageContent = React.createClass({
  _onChange() {
    this.setState(getStateFromStore());
  },

  getInitialState() {
    return getStateFromStore();
  },

  componentDidMount() {
    PageStore.addChangeListener(this._onChange);
  },

  render() {
    let page = this.state.page;

    if (page) {

      var pageChangeLog;

      if (page.acf === undefined || page.acf.change_log === undefined) {
        pageChangeLog = [];
      } else {
        pageChangeLog = page.acf.change_log;
      }
      
      return (
      <div>
        <div className="page_header">
          <h1>{this.state.page.title}</h1>
        </div>

        <div id="page_body">
          <div id="page_content" dangerouslySetInnerHTML={{__html: this.state.page.content}}></div>

          <MobileTabs page={this.state.page} />

          <ChangeLog pageChangeLog={pageChangeLog} />
        </div>


      </div>
      );
    } else {
      return (
        <div>Page Not Found</div>
      );
    }
  }
});

module.exports = PageContent;
