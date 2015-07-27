const React = require('react');

let ChangeLog = React.createClass({
  
  render() {
    let changeLog = this.props.pageChangeLog;

    let cta;

    if (changeLog.length) {

      // if (changeLog.length === 6) {
      //   cta = <a href="">See all changes</a>;
      // } 
      // else {
      //   cta = <p onClick={this.handleClick}>Load more</p>;
      // }
      cta = <a href="/#design-principle-the-first">See all changes</a>;
      return  <div className="page__change_log">
                <h2>Style Guide Change Log </h2>
                <small>(last 3 updates)</small>

                {
                  changeLog.map((logItem) => {
                      return  <p>
                                <span>{logItem.date} - </span> 
                                <span>{logItem.description}</span>
                              </p>;
                  })
                }

                {cta}
              </div>;

    }
    else {
      return null;
    }
  }
});

module.exports = ChangeLog;
