const React = require('react');

let MobileTab = React.createClass({

  _handleClick() {
    this.props.onTabSelect(this.props.name);
  },

  render() {
    let className = this.props.selected ? 'mobile_tab_header__selected' : '';
    return <h2 onClick={this._handleClick} className={className}>{this.props.name}</h2>;
  }

});

module.exports = MobileTab;