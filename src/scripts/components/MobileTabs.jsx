const React = require('react'),
      Entities = require('html-entities').XmlEntities;
 
let entities = new Entities();

let MobileTabs = React.createClass({
  
  // getInitialState() {
  //   return {
  //     pageChangeLog: this.props.pageChangeLog.slice(0, 3)
  //   }
  // },

  // handleClick(e) {
  //   this.setState({
  //     pageChangeLog: this.state.pageChangeLog.concat(this.props.pageChangeLog.slice(3, 6))
  //   })
  // },

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     pageChangeLog: nextProps.pageChangeLog.slice(0, 3)
  //   });
  // },

  render() {
    let acf = this.props.page.acf;

       
      return  <div className="page__mobile_tabs">
                <h2>iOS</h2>

                <div dangerouslySetInnerHTML={{__html: entities.decode(acf.ios)}}></div>
               
              </div>;

  }
});

module.exports = MobileTabs;
