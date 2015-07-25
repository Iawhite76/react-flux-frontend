const React = require('react'),
      PageStore = require('../stores/PageStore');

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
      return (
      <div className="col-xs-12 col-sm-9">
        <h1>{this.state.page.title}</h1>
        <div className="page-body" dangerouslySetInnerHTML={{__html: this.state.page.content}}></div>
      </div>
      );
    } else {
      return (
        <div className="col-xs-12 col-sm-9">Page Not Found</div>
      );
    }
  }
});

module.exports = PageContent;
