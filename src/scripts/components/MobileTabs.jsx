const React = require('react'),
      MobileTab = require('./MobileTab.jsx');

let MobileTabs = React.createClass({

  getInitialState() {
    return {
      selectedTabName: 'iOS'
    }
  },

  _handleTabSelect(tabName) {
    this.setState({
      selectedTabName: tabName
    })
  },

  render() {
    let iosSelected = this.state.selectedTabName == 'iOS';
    let content = iosSelected ? this.props.iosContent : this.props.androidContent;

    return  <div className="page__mobile_tabs row">
              <div className="mobile_tab_header_container">
                <MobileTab onTabSelect={this._handleTabSelect} selected={iosSelected} name="iOS" />
                <MobileTab onTabSelect={this._handleTabSelect} selected={!iosSelected} name="Android" />
              </div>
              <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>;
  }
});

module.exports = MobileTabs;
