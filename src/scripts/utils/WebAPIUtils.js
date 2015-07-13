const SideBarNavActions = require('../actions/SideBarNavActions'),
			ServerActionCreators = require('../actions/ServerActionCreators'),
      Constants = require('../constants/Constants.js'),
      request = require('superagent'),
      APIEndpoints = Constants.APIEndpoints,
      WP = require( 'wordpress-rest-api' ),
      wp = new WP({ endpoint: 'http://wordpress.api.dev/wp-json' });

module.exports = {

	loadCategories() {

		wp.categories()
			.then(function( data ) {
		    // do something with the returned posts 
		     console.log(data);
		    ServerActionCreators.receiveCategories(data);
			})
			.catch(function( err ) {
		    // handle error 
		    console.log(err)
			});
	}

};