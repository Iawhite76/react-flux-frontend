const React = require('react'),
      Entities = require('html-entities').XmlEntities;
 
let entities = new Entities();

let MobileTabs = React.createClass({
  
  getInitialState() {
    return {
      togglePage: false
    }
  },

  handleClick(e) {
    e.preventDefault();
    this.setState({
      togglePage: !this.state.togglePage
    })
  },

  render() {
    let acf = this.props.page.acf;

    if (this.state.togglePage) {
      return  <div className="page__mobile_tabs">
                <h2 onClick={this.handleClick}>Android</h2>

                <div dangerouslySetInnerHTML={{__html: entities.decode(acf.android)}}></div>
               
              </div>;
      
    } else {
      return  <div className="page__mobile_tabs">
                <h2 onClick={this.handleClick}>iOS</h2>

                <div dangerouslySetInnerHTML={{__html: entities.decode(acf.ios)}}></div>
               
              </div>;
    }

       

  }
});

module.exports = MobileTabs;
