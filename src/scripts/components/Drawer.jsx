var React = require('react/addons');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Drawer = React.createClass({
  render: function() {
    var items = [];
    if (this.props.open) {
      items.push(
        <ul className="drawer" key="1">
          <li>Nav item 1</li>
          <li>Nav item 2</li>
          <li>Nav item 3</li>
        </ul>
      );
    }

    return (
      <ReactCSSTransitionGroup transitionName="drawer">
        {items}
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = Drawer;