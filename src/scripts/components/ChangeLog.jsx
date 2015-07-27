const React = require('react'),
      PageContent = require('./PageContent');

// function getStateFromStore() {
//   return {
//     page: PageStore.getCurrentPage()
//   };
// }

let ChangeLog = React.createClass({
  // _onChange() {
  //   this.setState(getStateFromStore());
  // },

  getInitialState() {
    return {
      changeLogArray: this.props.changeLogArray
    };
  },

  // componentDidMount() {
  //   PageStore.addChangeListener(this._onChange);
  // },

  render() {

    return <div className="page__change_log">
            <h2>Style Guide Change Log </h2>
            <small>(last 3 updates)</small>
            {
              this.state.changeLogArray.map((logItem) => {
                  return  <p>
                            <span>{logItem.date} - </span> 
                            <span>{logItem.description}</span>
                          </p>;
              })
            }
          </div>;
  }
});

module.exports = ChangeLog;
