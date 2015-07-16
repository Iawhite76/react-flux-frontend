const SideBarNavActions = require('../actions/SideBarNavActionCreators'),
			ServerActionCreators = require('../actions/ServerActionCreators'),
      Constants = require('../constants/Constants.js'),
      request = require('superagent'),
      APIEndpoints = Constants.APIEndpoints,
      WP = require( 'wordpress-rest-api' ),
      wp = new WP({ endpoint: APIEndpoints.WP_JSON }),
      buildMenu = require('./Utils').buildMenu;
      

      function _getErrors(res) {
        let errorMsgs = ["Something went wrong, please try again"],
            json = JSON.parse(res.text);
        if ((json)) {
          if (json['errors']) {
            errorMsgs = json['errors'];
          } else if (json['error']) {
            errorMsgs = [json['error']];
          }
        }
        return errorMsgs;
      }

module.exports = {

	loadNavigationMenu() {

    request.get(APIEndpoints.WP_JSON + APIEndpoints.WP_MAIN_NAV_MENU)
	  .set('Accept', 'application/json')
	  .end(function(error, res) {
	    if (res) {
	      if (res.error) {
	        let errorMsgs = _getErrors(res);
	        // console.log(errorMsgs);
	        // ServerActionCreators.receiveLogin(null, errorMsgs);
	      } else {
	        let json = JSON.parse(res.text);
	        console.log(json);
	        let navObj = buildMenu(json);
	        ServerActionCreators.receiveNavigationMenuJSON(navObj);
	      }
	    }
	  });
		
	},

	loadPages(query) {

		request.get(APIEndpoints.QUERY_ROOT + query)
		  .set('Accept', 'application/json')
		  .end(function(error, res) {
		    if (res) {
		      if (res.error) {
		        let errorMsgs = _getErrors(res);
		        // console.log(errorMsgs);
		        // ServerActionCreators.receiveLogin(null, errorMsgs);
		      } else {
		        // console.log(res.text);
		        let json = JSON.parse(res.text);
		        console.log(json);
		        ServerActionCreators.receiveNavigationMenuJSON(json);
		      }
		    }
		  });
	}

};