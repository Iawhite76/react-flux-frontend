const React = require('react');
 
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
      return  <div className="page__mobile_tabs row">
                <div className="mobile_tab_header_container">
                  <h2 onClick={this.handleClick}>iOS</h2>
                  <h2 className="mobile_tab_header__selected">Android</h2>
                </div>

                <div dangerouslySetInnerHTML={{__html: acf.android}}></div>
               
              </div>;
      
    } else {
      return  <div className="page__mobile_tabs row">
                <div className="mobile_tab_header_container">
                  <h2 className="mobile_tab_header__selected">iOS</h2>
                  <h2 onClick={this.handleClick}>Android</h2>
                </div>

                <div dangerouslySetInnerHTML={{__html: acf.ios}}></div>
               
              </div>;
    }

       

  }
});

module.exports = MobileTabs;
