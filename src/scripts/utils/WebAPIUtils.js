const SideBarNavActions = require('../actions/SideBarNavActionCreators'),
			ServerActionCreators = require('../actions/ServerActionCreators'),
      Constants = require('../constants/Constants.js'),
      Promise = require('promise'),
      request = require('superagent-promise')(require('superagent'), Promise),
      APIEndpoints = Constants.APIEndpoints,
      WP_JSON = APIEndpoints.WP_JSON,
      ALL_PAGES_ENDPOINT = APIEndpoints.ALL_PAGES_ENDPOINT,
      WP_MAIN_NAV_MENU = APIEndpoints.WP_MAIN_NAV_MENU;

module.exports = {

	loadNavigationMenu() {

		setTimeout(() => {
			var navMenuText = '[{"ID":2,"uri":"home","order":1,"parent":0,"title":"Home","url":"http:\/\/mobilestyle.ups.dev\/home\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":2,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":15,"uri":"home\/getting-started","order":2,"parent":46,"title":"Getting Started","url":"http:\/\/mobilestyle.ups.dev\/home\/getting-started\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":15,"object":"page","type":"post_type","type_label":"Page","children":[]},{"ID":22,"uri":"home\/interaction-design-principles","order":3,"parent":46,"title":"Interaction Design Principles","url":"http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":22,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":24,"uri":"home\/interaction-design-principles\/design-principle-the-first","order":4,"parent":48,"title":"Design Principle the First","url":"http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/design-principle-the-first\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":24,"object":"page","type":"post_type","type_label":"Page","children":[]}]},{"ID":102,"uri":"home\/consolidated-change-log","order":5,"parent":46,"title":"Consolidated Change Log","url":"http:\/\/mobilestyle.ups.dev\/home\/consolidated-change-log\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":102,"object":"page","type":"post_type","type_label":"Page","children":[]}]},{"ID":13,"uri":"ups-mobile","order":6,"parent":0,"title":"UPS Mobile (iOS, Android)","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":13,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":26,"uri":"ups-mobile\/overview","order":7,"parent":54,"title":"Overview","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/overview\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":26,"object":"page","type":"post_type","type_label":"Page","children":[]},{"ID":28,"uri":"ups-mobile\/reference","order":8,"parent":54,"title":"Reference","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/reference\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":28,"object":"page","type":"post_type","type_label":"Page","children":[]}]},{"ID":8,"uri":"mdot","order":9,"parent":0,"title":"mDot","url":"http:\/\/mobilestyle.ups.dev\/mdot\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":8,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":30,"uri":"mdot\/elements","order":10,"parent":50,"title":"Elements","url":"http:\/\/mobilestyle.ups.dev\/mdot\/elements\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":30,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":32,"uri":"mdot\/elements\/navigation","order":11,"parent":51,"title":"Navigation","url":"http:\/\/mobilestyle.ups.dev\/mdot\/elements\/navigation\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":32,"object":"page","type":"post_type","type_label":"Page","children":[]}]}]}]';
			ServerActionCreators.receiveNavigationMenuJSON(JSON.parse(navMenuText));
		});

		// request('GET', WP_JSON + WP_MAIN_NAV_MENU)
		//   .set('Accept', 'application/json')
		//   .end()
		//   .then(function onResult(res) {
		//     // do stuff
		//     let json = JSON.parse(res.text);
  //           ServerActionCreators.receiveNavigationMenuJSON(json);
  //         })
  //         .catch(function(error) {
  //           // handle errors
  //           console.log(error);
  //         });
    },

    loadAllPages() {
      // For Zacharias
      setTimeout(() => {
        let pages = [{
    "ID": 102,
    "title": "Consolidated Change Log",
    "content": "",
    "acf": {
        "ups_mobile_for_ios": [],
        "change_log": [],
        "change_log_label": "Decision History",
        "ios": "",
        "android": ""
    },
    "slug": "consolidated-change-log"
}, {
    "ID": 24,
    "title": "Design Principle the First",
    "content": "foist",
    "acf": false,
    "slug": "design-principle-the-first"
}, {
    "ID": 30,
    "title": "Elements",
    "content": "",
    "acf": false,
    "slug": "elements"
}, {
    "ID": 15,
    "title": "Getting Started",
    "content": "<p>Welcome! Lorem ipsum dolor sit amet, vel ne graecis maiorum definitiones, eos ad modo porro platonem. Singulis accusata ne sit. Vim at libris nonumes.<\/p>\r\n\r\n<img class=\"alignnone size-full wp-image-78\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/getting-started.png\" alt=\"getting-started\" width=\"591\" height=\"256\" \/>\r\n\r\n<h2>Purpose of this site<\/h2>\r\n<p>Lorem ipsum dolor sit amet, vel ne graecis maiorum definitiones, eos ad modo porro platonem. Singulis accusata ne sit. Vim at libris nonumes.<\/p>\r\n\r\n<h2>How to use this site<\/h2> \r\n<p>Lorem ipsum dolor sit amet, vel ne graecis maiorum definitiones, eos ad modo porro platonem. Singulis accusata ne sit. Vim at libris nonumes vocibus.<\/p>\r\n\r\n<h2>Help contact at UPS Mobile - SDC<\/h2> \r\n<p>Do you have questions about the site or any topics listed on this site? Is there anything new you would like added to this library? <a href=\"http:\/\/www.google.com\" target=\"_blank\">Email us at mobilealias@ups.com<\/a>.<\/p>\r\n",
    "acf": {
        "": false,
        "ups_mobile_for_ios": [{
            "mobile_link_ios": "<a href=#>http:\/\/m.ups.com<\/a>"
        }],
        "change_log": [{
            "date": "5\/26\/15 ",
            "description": "Update to capitalization rules across platforms (SDC email). "
        }, {
            "date": "5\/24\/15 ",
            "description": "Required fields rule updated across platforms (5\/23 meeting). "
        }, {
            "date": "4\/17\/15 ",
            "description": "Changes made to button UI (ER 1600 review). "
        }, {
            "date": "2\/14\/15 ",
            "description": "It&#039;s valentine&#039;s day, y&#039;allll"
        }],
        "ios": "<h2>How it works<\/h2>\n<p>Navigation menus are reached from the header by tapping an associated menu icon.<\/p>\n<p>When a user clicks on the hamburger icon in the header, the main navigation menu opens.<\/p>\n<p>The main menu can appear in several states:<\/p>\n<ul>\n<li>Logged Out<\/li>\n<li>Logged In<\/li>\n<\/ul>\n<p>Navigation menu items are displayed with title casing.<\/p>\n<div class=\"col-sm-6\">\nLogged out<br \/>\n<img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/>\n<\/div>\n<div class=\"col-sm-6\">\nLogged in<br \/>\n<img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/>\n<\/div>\n<div class=\"col-sm-6\">\nLogged out<br \/>\n<img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/>\n<\/div>\n<div class=\"col-sm-6\">\nLogged in<br \/>\n<img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/>\n<\/div>\n<div class=\"col-sm-6\">\nLogged out<br \/>\n<img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/>\n<\/div>\n<div class=\"col-sm-6\">\nLogged in<br \/>\n<img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/>\n<\/div>\n",
        "android": "<h2>Android stuff<\/h2>\n<p>text without a p tag &#8211; wordpress wysiwyg editor<\/p>\n<p>text with a p tag<\/p>\n<p><img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/><\/p>\n",
        "change_log_label": "Decision History"
    },
    "slug": "getting-started"
}, {
    "ID": 2,
    "title": "Home",
    "content": "",
    "acf": false,
    "slug": "home"
}, {
    "ID": 22,
    "title": "Interaction Design Principles",
    "content": "",
    "acf": false,
    "slug": "interaction-design-principles"
}, {
    "ID": 8,
    "title": "mDot",
    "content": "oinkers zoinkers",
    "acf": false,
    "slug": "mdot"
}, {
    "ID": 32,
    "title": "Navigation",
    "content": "Navigation menus house links that allow a user to move between screens.\r\n\r\n<h1>What problem does this solve?<\/h1>\r\nIn order to accomplish tasks, users need to be able to locate content and features, and move between sections of the app.  \r\n\r\n<h1>When to use this pattern (and when not to)<h1>\r\nUse this pattern for navigation menus. At minimum, a main navigation menu must exist to allow users to move between sections of the app.\r\n\r\n\r\n",
    "acf": {
        "ups_mobile_for_ios": [],
        "": false,
        "change_log": [{
            "date": "5\/26\/15 ",
            "description": "Changed some other things (ER 1600 review)."
        }, {
            "date": "5\/2\/15 ",
            "description": "Changed something huge (RFC 7500)"
        }, {
            "date": "3\/28\/15 ",
            "description": "Changed some things (ER 1600 review). "
        }],
        "ios": "<p>&lt;h1&gt;How it works&lt;\/h1&gt;<\/p>\n<p>Navigation menus are reached from the header by tapping an associated menu icon.<\/p>\n<p>When a user clicks on the hamburger icon in the header, the main navigation menu opens.<\/p>\n<p>The main menu can appear in several states:<\/p>\n<ul>\n<li>Logged Out<\/li>\n<li>Logged In<\/li>\n<\/ul>\n<p>Navigation menu items are displayed with title casing.<\/p>\n<p><img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/><\/p>\n",
        "android": "<p>&lt;h1&gt;Android stuff&lt;\/h1&gt;<\/p>\n<p><img class=\"alignnone size-full wp-image-89\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/logged-out.jpg\" alt=\"logged-out\" width=\"292\" height=\"519\" \/><\/p>\n"
    },
    "slug": "navigation"
}, {
    "ID": 26,
    "title": "Overview",
    "content": "",
    "acf": false,
    "slug": "overview"
}, {
    "ID": 28,
    "title": "Reference",
    "content": "manoj",
    "acf": false,
    "slug": "reference"
}, {
    "ID": 19,
    "title": "search results",
    "content": "",
    "acf": false,
    "slug": "search-results"
}, {
    "ID": 13,
    "title": "UPS Mobile (iOS, Android)",
    "content": "",
    "acf": false,
    "slug": "ups-mobile"
}];
        ServerActionCreators.receivePages(pages);
      });

      // request('GET', ALL_PAGES_ENDPOINT)
      //   .set('Accept', 'application/json')
      //   .end()
      //   .then(function onResult(res) {
      //     // do stuff
      //     let pages = JSON.parse(res.text);
    		//   ServerActionCreators.receivePages(pages);
      //   })
      //   .catch(function(error) {
      //     // handle errors
      //     console.log(error);
      //   });

	}

};