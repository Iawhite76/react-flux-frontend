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

		request('GET', APIEndpoints.WP_JSON + APIEndpoints.WP_MAIN_NAV_MENU)
		  .set('Accept', 'application/json')
		  .end()
		  .then(function onResult(res) {
		    // do stuff 
		    let json = JSON.parse(res.text);
		    ServerActionCreators.receiveNavigationMenuJSON(json);
		  })
		  .catch(function(error) {
		    // handle errors 
		    console.log(error);
		  });
	},

	loadPages(searchString) {
		request('GET', APIEndpoints.QUERY_ROOT + searchString)
		  .set('Accept', 'application/json')
		  .end()
		  .then(function onResult(res) {
		    // do stuff 
		    let json = JSON.parse(res.text);
        console.log(json);
        ServerActionCreators.receivePagesJsonArray(json);
		  })
		  .catch(function(error) {
		    // handle errors 
		    console.log(error);
		  });

	}

};