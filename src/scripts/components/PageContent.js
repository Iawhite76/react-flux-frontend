const React = require('react'),
      PageStore = require('../stores/PageStore'),
      ChangeLog = require('./ChangeLog.jsx');

function getStateFromStore() {
  return {
    page: PageStore.getCurrentPage(),
    pageChangeLog: PageStore.getPageChangeLog()
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
      return (
      <div>
        <div className="page_header">
          <h1>{this.state.page.title}</h1>
        </div>

        <div id="page_body">
          <div dangerouslySetInnerHTML={{__html: this.state.page.content}}></div>

          <ChangeLog pageChangeLog={this.state.pageChangeLog} />
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
