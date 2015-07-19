require('bootstrap-webpack');
require('../assets/stylesheets/style.styl');
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

// TODO: Require assets here.
// require('../assets/images/product.png');

const React = require('react'),
			SideBarNav = require('./components/SideBarNav.jsx'),
			Content = require('./components/Content');

var App = React.createClass({

  render: function() {
    return (
      <div>
       <SideBarNav />
       <Content />
      </div>
    );
  }
});

React.render(<Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>, document.getElementById('main'));

// React.render(<Router history={new HashHistory}>
//     <Route path="/" component={App}>
//       <Route path="pages/:id" component={Page}/>
//     </Route>
//   </Router>, document.getElementById('main'));
