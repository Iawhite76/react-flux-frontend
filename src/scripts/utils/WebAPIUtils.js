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
			var navMenuText = '[{"ID":2,"uri":"home","order":1,"parent":0,"title":"Home","url":"http:\/\/mobilestyle.ups.dev\/home\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":2,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":15,"uri":"home\/getting-started","order":2,"parent":46,"title":"Getting Started","url":"http:\/\/mobilestyle.ups.dev\/home\/getting-started\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":15,"object":"page","type":"post_type","type_label":"Page","children":[]},{"ID":22,"uri":"home\/interaction-design-principles","order":3,"parent":46,"title":"Interaction Design Principles","url":"http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":22,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":24,"uri":"home\/interaction-design-principles\/design-principle-the-first","order":4,"parent":48,"title":"Design Principle the First","url":"http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/design-principle-the-first\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":24,"object":"page","type":"post_type","type_label":"Page","children":[]}]}]},{"ID":13,"uri":"ups-mobile","order":5,"parent":0,"title":"UPS Mobile (iOS, Android)","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":13,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":26,"uri":"ups-mobile\/overview","order":6,"parent":54,"title":"Overview","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/overview\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":26,"object":"page","type":"post_type","type_label":"Page","children":[]},{"ID":28,"uri":"ups-mobile\/reference","order":7,"parent":54,"title":"Reference","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/reference\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":28,"object":"page","type":"post_type","type_label":"Page","children":[]}]},{"ID":8,"uri":"mdot","order":8,"parent":0,"title":"mDot","url":"http:\/\/mobilestyle.ups.dev\/mdot\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":8,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":30,"uri":"mdot\/elements","order":9,"parent":50,"title":"Elements","url":"http:\/\/mobilestyle.ups.dev\/mdot\/elements\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":30,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":32,"uri":"mdot\/elements\/navigation","order":10,"parent":51,"title":"Navigation","url":"http:\/\/mobilestyle.ups.dev\/mdot\/elements\/navigation\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":32,"object":"page","type":"post_type","type_label":"Page","children":[]}]}]}]';
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
        let pages = [{"ID":24,"title":"Design Principle the First","content":"foist","acf":false,"slug":"design-principle-the-first"},{"ID":30,"title":"Elements","content":"","acf":false,"slug":"elements"},{"ID":15,"title":"Getting Started","content":"test content zoinkers boinkers\r\n\r\nlove bat!\r\n\r\n&nbsp;\r\n<ul>\r\n\t<li>test list<\/li>\r\n\t<li>list<\/li>\r\n\t<li>now<\/li>\r\n<\/ul>\r\n<a href=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/abe.jpg\"><img class=\"alignnone size-full wp-image-73\" src=\"http:\/\/mobilestyle.ups.dev\/wp-content\/uploads\/2015\/07\/abe.jpg\" alt=\"abe\" width=\"720\" height=\"540\" \/><\/a>","acf":{"":false,"ups_mobile_for_ios":[{"mobile_link_ios":"<a href=#>http:\/\/m.ups.com<\/a>"}]},"slug":"getting-started"},{"ID":2,"title":"Home","content":"","acf":false,"slug":"home"},{"ID":22,"title":"Interaction Design Principles","content":"","acf":false,"slug":"interaction-design-principles"},{"ID":8,"title":"mDot","content":"oinkers zoinkers","acf":false,"slug":"mdot"},{"ID":32,"title":"Navigation","content":"navbar","acf":false,"slug":"navigation"},{"ID":26,"title":"Overview","content":"","acf":false,"slug":"overview"},{"ID":28,"title":"Reference","content":"manoj","acf":false,"slug":"reference"},{"ID":70,"title":"sdvhkdsjvfad","content":"","acf":false,"slug":"sdvhkdsjvfad"},{"ID":19,"title":"search results","content":"","acf":false,"slug":"search-results"},{"ID":13,"title":"UPS Mobile (iOS, Android)","content":"","acf":false,"slug":"ups-mobile"}];
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