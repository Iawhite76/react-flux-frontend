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

      let pageChangeLog,
          changeLogHeaderText,
          MobileTabsComponent,
          ChangeLogComponent,
          acf = page.acf;


      if (acf) {

        if (acf.ios && acf.android) {
          MobileTabsComponent = <MobileTabs iosContent={acf.ios} androidContent={acf.android} />;
        }

        pageChangeLog = page.acf.change_log || [];
        changeLogHeaderText = page.acf.change_log_label;
        if (pageChangeLog.length) {
          ChangeLogComponent = <ChangeLog pageChangeLog={pageChangeLog} changeLogHeaderText={changeLogHeaderText} moreLoaded={false} />
        }
      }


      return (
      <div>
        <main className="col-xs-12 col-md-9">

          <div className="page_header">
            <h1>{this.state.page.title}</h1>
          </div>

          <div id="page_body">
            <div id="page_content" dangerouslySetInnerHTML={{__html: this.state.page.content}}></div>
            {MobileTabsComponent}
            {ChangeLogComponent}
          </div>

        </main>

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
