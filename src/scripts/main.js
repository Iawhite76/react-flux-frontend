require('bootstrap-webpack');
require('../assets/stylesheets/style.styl');
import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

// TODO: Require assets here.
// require('../assets/images/product.png');

const React = require('react'),
			SideBarNav = require('./components/SideBarNav.jsx'),
			Content = require('./components/Content');

var App = React.createClass({

  getInitialState() {
    return {
      pages: [
        {
          "ID": 15,
          "post_title": "Getting Started",
          "post_content": "test content zoinkers boinkers",
          "uri": "home/getting-started"
        }, {
          "ID": 2,
          "post_title": "Home",
          "post_content": "",
          "uri": "home"
        },
        {
          "ID": 3,
          "post_title": "Interaction",
          "post_content": "yoyoyoy",
          "uri": "home/interaction-design-principles/design-principle-the-first"
        }
      ]
    }
  },

  render: function() {
    var links = this.state.pages.map(function (page, i) {
      return (
        <li key={i}>
          <Link to={`/page/${page.uri}`}>{page.post_title}</Link>
        </li>
      );
    });

    return (
      <div>
       <SideBarNav />
       <Content />
       {links}
       <div className="Detail">
         {this.props.children}
       </div>
      </div>
    );
  }
});

var Page = React.createClass({

  render: function () {
    return (
      <div className="Page">
        <h1>{this.props.params.post_title}</h1>
      </div>
    );
  }
});

React.render(<Router history={history}>
    <Route path="/" component={App}>
      <Route path="page/:post_title" component={Page} />
      <Route path="page/:page_name/:post_title" component={Page} />
      <Route path="page/:page_name/:parent/:post_title" component={Page} />
    </Route>
  </Router>, document.getElementById('main'));

// React.render(<Router history={new HashHistory}>
//     <Route path="/" component={App}>
//       <Route path="pages/:id" component={Page}/>
//     </Route>
//   </Router>, document.getElementById('main'));
