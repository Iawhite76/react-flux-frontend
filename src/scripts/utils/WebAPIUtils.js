const SideBarNavActions = require('../actions/SideBarNavActionCreators'),
			ServerActionCreators = require('../actions/ServerActionCreators'),
      Constants = require('../constants/Constants.js'),
      Promise = require('promise'),
      request = require('superagent-promise')(require('superagent'), Promise),
      APIEndpoints = Constants.APIEndpoints,
      WP = require( 'wordpress-rest-api' ),
      wp = new WP({ endpoint: APIEndpoints.WP_JSON });
module.exports = {

	loadNavigationMenu() {

		setTimeout(() => {
			var navMenuText = '[{"ID":46,"order":1,"parent":0,"title":"Home","url":"http:\/\/mobilestyle.ups.dev\/home\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":2,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":47,"order":2,"parent":46,"title":"Getting Started","url":"http:\/\/mobilestyle.ups.dev\/home\/getting-started\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":15,"object":"page","type":"post_type","type_label":"Page","children":[]},{"ID":48,"order":3,"parent":46,"title":"Interaction Design Principles","url":"http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":22,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":49,"order":4,"parent":48,"title":"Design Principle the First","url":"http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/design-principle-the-first\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":24,"object":"page","type":"post_type","type_label":"Page","children":[]}]}]},{"ID":54,"order":5,"parent":0,"title":"UPS Mobile (iOS, Android)","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":13,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":55,"order":6,"parent":54,"title":"Overview","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/overview\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":26,"object":"page","type":"post_type","type_label":"Page","children":[]},{"ID":56,"order":7,"parent":54,"title":"Reference","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/reference\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":28,"object":"page","type":"post_type","type_label":"Page","children":[]}]},{"ID":50,"order":8,"parent":0,"title":"mDot","url":"http:\/\/mobilestyle.ups.dev\/mdot\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":8,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":51,"order":9,"parent":50,"title":"Elements","url":"http:\/\/mobilestyle.ups.dev\/mdot\/elements\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":30,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":52,"order":10,"parent":51,"title":"Navigation","url":"http:\/\/mobilestyle.ups.dev\/mdot\/elements\/navigation\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":32,"object":"page","type":"post_type","type_label":"Page","children":[]}]}]}]';
			ServerActionCreators.receiveNavigationMenuJSON(JSON.parse(navMenuText));
		});

		// request('GET', APIEndpoints.WP_JSON + APIEndpoints.WP_MAIN_NAV_MENU)
		//   .set('Accept', 'application/json')
		//   .end()
		//   .then(function onResult(res) {
		//     // do stuff
		//     let json = JSON.parse(res.text);
		//     ServerActionCreators.receiveNavigationMenuJSON(json);
		//   })
		//   .catch(function(error) {
		//     // handle errors
		//     console.log(error);
		//   });
	},

	loadPages(searchString) {
		// Pass empty array to reset nav menu if search string is empty
		if (!searchString.length) {
			ServerActionCreators.receivePagesJsonArray([]);
		}

			request('GET', APIEndpoints.QUERY_ROOT + searchString)
			  .set('Accept', 'application/json')
			  .end()
			  .then(function onResult(res) {
			    // do stuff
			    let json = JSON.parse(res.text);
	        ServerActionCreators.receivePagesJsonArray(json);
			  })
			  .catch(function(error) {
			    // handle errors
			    console.log(error);
			  });

	}

};