const React = require('react'),
      PageStore = require('../stores/PageStore'),
      ChangeLog = require('./ChangeLog.jsx'),
      MobileTabs = require('./MobileTabs.jsx'),
      Reactable = require('reactable'),
      ConsolidatedChangeLog = require('./ConsolidatedChangeLog.jsx');

function getStateFromStore() {
  return {
    page: PageStore.getCurrentPage(),
    consolidatedChangeLogData: [
                {Date: '5\/26\/15', Section: 'Getting Started', 'Change Details': 'Update to capitalization rules across platforms (SDC email).'},
                {Date: '5\/24\/15', Section: 'Apple', 'Change Details': 'Required fields rule updated across platforms (5\/23 meeting).'},
                {Date: '4\/17\/15', Section: 'Getting Started', 'Change Details': 'Changes made to button UI (ER 1600 review).'},
                {Date: '2\/14\/15', Section: 'Zoinkers', 'Change Details': 'It&#039;s valentine&#039;s day, y&#039;allll'}
              ]
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
          acf = page.acf,
          pageContent = null;

          // TODO: add field to filter consolodatedPage data by chosen sections
          // _.find(a, function(x)  { return x.Section === 'Getting Started' })

          if (page.slug === 'consolidated-change-log') {
            pageContent = <ConsolidatedChangeLog className="table consolidated_change_log_table" data={this.state.consolidatedChangeLogData}  
                                                  itemsPerPage={2} 
                                                  sortable={true} 
                                                  defaultSort={{column: 'Date', direction: 'desc'}}
                                                  filterable={['Section']}
                          />;
          } else {
            pageContent = <div id="page_content" dangerouslySetInnerHTML={{__html: page.content}}></div>;
          }

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
            {pageContent}
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
