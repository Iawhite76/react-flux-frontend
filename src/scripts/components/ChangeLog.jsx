const React = require('react'),
      Entities = require('html-entities').XmlEntities;
 
let entities = new Entities();

let ChangeLog = React.createClass({
  
  getInitialState() {
    return {
      pageChangeLog: this.props.pageChangeLog.slice(0, 3)
    }
  },

  handleClick(e) {
    this.setState({
      pageChangeLog: this.state.pageChangeLog.concat(this.props.pageChangeLog.slice(3, 6))
    })
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      pageChangeLog: nextProps.pageChangeLog.slice(0, 3)
    });
  },

  render() {
    let changeLog = this.state.pageChangeLog;

    let cta;

    if (changeLog.length) {

      let lengthOfChangeLog = changeLog.length,
          propsChangeLogLength = this.props.pageChangeLog.length

      if (lengthOfChangeLog === propsChangeLogLength) {
        cta = null;
      } 
      else if (lengthOfChangeLog === 6){
        cta = <a href="/#design-principle-the-first">See all changes</a>;
      } 
      else {
        cta = <p onClick={this.handleClick}>Load more</p>;
      }

       
      return  <div className="page__change_log">
                <h2>Decision History </h2>
                <small>(last 3 updates)</small>

                {
                  changeLog.map((logItem, i) => {
                      return  <p id={`log_item ${i}`} key={`log_item ${i}`}>
                                <span>{logItem.date} - </span> 
                                <span>{entities.decode(logItem.description)}</span>
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
