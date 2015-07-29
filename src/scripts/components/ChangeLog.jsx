const React = require('react'),
      Entities = require('html-entities').XmlEntities;

let entities = new Entities();

let ChangeLog = React.createClass({

  getInitialState() {
    return {
      moreLoaded: false
    }
  },

  _handleClick() {
    this.setState({
      moreLoaded: true
    })
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      moreLoaded: this.props.moreLoaded
    })
  },

  render() {
    let loadMoreButton,
        showAllButton,
        subTitle,
        numShown,
        changeLog = this.props.pageChangeLog || [];

    if (changeLog.length) {
      numShown = changeLog.length;

      if (changeLog.length > 3) {
        if (this.state.moreLoaded) {
          if (changeLog.length > 6) {
            numShown = 6;
            showAllButton = <a href="/#design-principle-the-first">See all changes</a>;
          }
        } else {
          numShown = 3;
          loadMoreButton = <p onClick={this._handleClick}>Load more</p>;
        }
      }

      subTitle = `last ${numShown} updates`;
      changeLog = changeLog.slice(0, numShown);

      return  <div className="page__change_log">
                <div>
                  <h2>Decision History</h2>
                  <small>({subTitle})</small>

                  {
                    changeLog.map((logItem, i) => {
                        return  <p>
                                  <span>{logItem.date} - </span>
                                  <span>{entities.decode(logItem.description)}</span>
                                </p>;
                    })
                  }

                  {loadMoreButton}
                  {showAllButton}
                </div>
              </div>;

    }
    else {
      return null;
    }
  }
});

module.exports = ChangeLog;
