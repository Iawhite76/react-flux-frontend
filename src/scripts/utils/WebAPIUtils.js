const SideBarNavActions = require('../actions/SideBarNavActionCreators'),
			ServerActionCreators = require('../actions/ServerActionCreators'),
      Constants = require('../constants/Constants.js'),
      Promise = require('promise'),
      request = require('superagent-promise')(require('superagent'), Promise),
      APIEndpoints = Constants.APIEndpoints;

module.exports = {

	loadNavigationMenu() {

		setTimeout(() => {
			var navMenuText = '[{"ID":2,"uri":"home","order":1,"parent":0,"title":"Home","url":"http:\/\/mobilestyle.ups.dev\/home\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":2,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":15,"uri":"home\/getting-started","order":2,"parent":46,"title":"Getting Started","url":"http:\/\/mobilestyle.ups.dev\/home\/getting-started\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":15,"object":"page","type":"post_type","type_label":"Page","children":[]},{"ID":22,"uri":"home\/interaction-design-principles","order":3,"parent":46,"title":"Interaction Design Principles","url":"http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":22,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":24,"uri":"home\/interaction-design-principles\/design-principle-the-first","order":4,"parent":48,"title":"Design Principle the First","url":"http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/design-principle-the-first\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":24,"object":"page","type":"post_type","type_label":"Page","children":[]}]}]},{"ID":13,"uri":"ups-mobile","order":5,"parent":0,"title":"UPS Mobile (iOS, Android)","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":13,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":26,"uri":"ups-mobile\/overview","order":6,"parent":54,"title":"Overview","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/overview\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":26,"object":"page","type":"post_type","type_label":"Page","children":[]},{"ID":28,"uri":"ups-mobile\/reference","order":7,"parent":54,"title":"Reference","url":"http:\/\/mobilestyle.ups.dev\/ups-mobile\/reference\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":28,"object":"page","type":"post_type","type_label":"Page","children":[]}]},{"ID":8,"uri":"mdot","order":8,"parent":0,"title":"mDot","url":"http:\/\/mobilestyle.ups.dev\/mdot\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":8,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":30,"uri":"mdot\/elements","order":9,"parent":50,"title":"Elements","url":"http:\/\/mobilestyle.ups.dev\/mdot\/elements\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":30,"object":"page","type":"post_type","type_label":"Page","children":[{"ID":32,"uri":"mdot\/elements\/navigation","order":10,"parent":51,"title":"Navigation","url":"http:\/\/mobilestyle.ups.dev\/mdot\/elements\/navigation\/","attr":"","target":"","classes":"","xfn":"","description":"","object_id":32,"object":"page","type":"post_type","type_label":"Page","children":[]}]}]}]';
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

	loadAllPages() {
		setTimeout(() => {
		  let pageArray = [{
    "ID": 32,
    "title": "Navigation",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "<p>navbar<\/p>\n",
    "parent": {
        "ID": 30,
        "title": "Elements",
        "status": "publish",
        "type": "page",
        "author": {
            "ID": 1,
            "username": "ups_admin",
            "name": "ups_admin",
            "first_name": "",
            "last_name": "",
            "nickname": "ups_admin",
            "slug": "ups_admin",
            "URL": "",
            "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
            "description": "",
            "registered": "2015-07-14T01:26:11+00:00",
            "meta": {
                "links": {
                    "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                    "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
                }
            }
        },
        "content": "",
        "parent": 8,
        "link": "http:\/\/mobilestyle.ups.dev\/mdot\/elements\/",
        "date": "2015-07-15T16:17:42",
        "modified": "2015-07-15T16:17:42",
        "format": "standard",
        "slug": "elements",
        "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=30",
        "excerpt": null,
        "menu_order": 0,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "date_tz": "UTC",
        "date_gmt": "2015-07-15T16:17:42",
        "modified_tz": "UTC",
        "modified_gmt": "2015-07-15T16:17:42",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/mdot\/elements",
                "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
                "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/30\/comments",
                "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/30\/revisions",
                "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/mdot"
            }
        },
        "featured_image": null,
        "terms": []
    },
    "link": "http:\/\/mobilestyle.ups.dev\/mdot\/elements\/navigation\/",
    "date": "2015-07-15T16:18:12",
    "modified": "2015-07-15T16:18:12",
    "format": "standard",
    "slug": "navigation",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=32",
    "excerpt": "<p>navbar<\/p>\n",
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-15T16:18:12",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-15T16:18:12",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/mdot\/elements\/navigation",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/32\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/32\/revisions",
            "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/mdot\/elements"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 30,
    "title": "Elements",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "",
    "parent": {
        "ID": 8,
        "title": "mDot",
        "status": "publish",
        "type": "page",
        "author": {
            "ID": 1,
            "username": "ups_admin",
            "name": "ups_admin",
            "first_name": "",
            "last_name": "",
            "nickname": "ups_admin",
            "slug": "ups_admin",
            "URL": "",
            "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
            "description": "",
            "registered": "2015-07-14T01:26:11+00:00",
            "meta": {
                "links": {
                    "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                    "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
                }
            }
        },
        "content": "<p>oinkers zoinkers<\/p>\n",
        "parent": null,
        "link": "http:\/\/mobilestyle.ups.dev\/mdot\/",
        "date": "2015-07-14T16:57:01",
        "modified": "2015-07-14T17:09:40",
        "format": "standard",
        "slug": "mdot",
        "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=8",
        "excerpt": "<p>oinkers zoinkers<\/p>\n",
        "menu_order": 0,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "date_tz": "UTC",
        "date_gmt": "2015-07-14T16:57:01",
        "modified_tz": "UTC",
        "modified_gmt": "2015-07-14T17:09:40",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/mdot",
                "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
                "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/8\/comments",
                "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/8\/revisions"
            }
        },
        "featured_image": null,
        "terms": []
    },
    "link": "http:\/\/mobilestyle.ups.dev\/mdot\/elements\/",
    "date": "2015-07-15T16:17:42",
    "modified": "2015-07-15T16:17:42",
    "format": "standard",
    "slug": "elements",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=30",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-15T16:17:42",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-15T16:17:42",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/mdot\/elements",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/30\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/30\/revisions",
            "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/mdot"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 28,
    "title": "Reference",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "<p>manoj<\/p>\n",
    "parent": {
        "ID": 13,
        "title": "UPS Mobile (iOS, Android)",
        "status": "publish",
        "type": "page",
        "author": {
            "ID": 1,
            "username": "ups_admin",
            "name": "ups_admin",
            "first_name": "",
            "last_name": "",
            "nickname": "ups_admin",
            "slug": "ups_admin",
            "URL": "",
            "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
            "description": "",
            "registered": "2015-07-14T01:26:11+00:00",
            "meta": {
                "links": {
                    "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                    "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
                }
            }
        },
        "content": "",
        "parent": null,
        "link": "http:\/\/mobilestyle.ups.dev\/ups-mobile\/",
        "date": "2015-07-14T17:10:12",
        "modified": "2015-07-14T17:10:21",
        "format": "standard",
        "slug": "ups-mobile",
        "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=13",
        "excerpt": null,
        "menu_order": 0,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "date_tz": "UTC",
        "date_gmt": "2015-07-14T17:10:12",
        "modified_tz": "UTC",
        "modified_gmt": "2015-07-14T17:10:21",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/ups-mobile",
                "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
                "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/13\/comments",
                "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/13\/revisions"
            }
        },
        "featured_image": null,
        "terms": []
    },
    "link": "http:\/\/mobilestyle.ups.dev\/ups-mobile\/reference\/",
    "date": "2015-07-15T16:17:30",
    "modified": "2015-07-15T16:17:30",
    "format": "standard",
    "slug": "reference",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=28",
    "excerpt": "<p>manoj<\/p>\n",
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-15T16:17:30",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-15T16:17:30",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/ups-mobile\/reference",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/28\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/28\/revisions",
            "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/ups-mobile"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 26,
    "title": "Overview",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "",
    "parent": {
        "ID": 13,
        "title": "UPS Mobile (iOS, Android)",
        "status": "publish",
        "type": "page",
        "author": {
            "ID": 1,
            "username": "ups_admin",
            "name": "ups_admin",
            "first_name": "",
            "last_name": "",
            "nickname": "ups_admin",
            "slug": "ups_admin",
            "URL": "",
            "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
            "description": "",
            "registered": "2015-07-14T01:26:11+00:00",
            "meta": {
                "links": {
                    "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                    "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
                }
            }
        },
        "content": "",
        "parent": null,
        "link": "http:\/\/mobilestyle.ups.dev\/ups-mobile\/",
        "date": "2015-07-14T17:10:12",
        "modified": "2015-07-14T17:10:21",
        "format": "standard",
        "slug": "ups-mobile",
        "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=13",
        "excerpt": null,
        "menu_order": 0,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "date_tz": "UTC",
        "date_gmt": "2015-07-14T17:10:12",
        "modified_tz": "UTC",
        "modified_gmt": "2015-07-14T17:10:21",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/ups-mobile",
                "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
                "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/13\/comments",
                "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/13\/revisions"
            }
        },
        "featured_image": null,
        "terms": []
    },
    "link": "http:\/\/mobilestyle.ups.dev\/ups-mobile\/overview\/",
    "date": "2015-07-15T16:17:10",
    "modified": "2015-07-15T16:17:10",
    "format": "standard",
    "slug": "overview",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=26",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-15T16:17:10",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-15T16:17:10",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/ups-mobile\/overview",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/26\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/26\/revisions",
            "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/ups-mobile"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 24,
    "title": "Design Principle the First",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "<p>foist<\/p>\n",
    "parent": {
        "ID": 22,
        "title": "Interaction Design Principles",
        "status": "publish",
        "type": "page",
        "author": {
            "ID": 1,
            "username": "ups_admin",
            "name": "ups_admin",
            "first_name": "",
            "last_name": "",
            "nickname": "ups_admin",
            "slug": "ups_admin",
            "URL": "",
            "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
            "description": "",
            "registered": "2015-07-14T01:26:11+00:00",
            "meta": {
                "links": {
                    "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                    "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
                }
            }
        },
        "content": "",
        "parent": 2,
        "link": "http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/",
        "date": "2015-07-15T16:16:23",
        "modified": "2015-07-15T16:16:23",
        "format": "standard",
        "slug": "interaction-design-principles",
        "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=22",
        "excerpt": null,
        "menu_order": 0,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "date_tz": "UTC",
        "date_gmt": "2015-07-15T16:16:23",
        "modified_tz": "UTC",
        "modified_gmt": "2015-07-15T16:16:23",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home\/interaction-design-principles",
                "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
                "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/22\/comments",
                "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/22\/revisions",
                "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home"
            }
        },
        "featured_image": null,
        "terms": []
    },
    "link": "http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/design-principle-the-first\/",
    "date": "2015-07-15T16:16:55",
    "modified": "2015-07-15T16:16:55",
    "format": "standard",
    "slug": "design-principle-the-first",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=24",
    "excerpt": "<p>foist<\/p>\n",
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-15T16:16:55",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-15T16:16:55",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home\/interaction-design-principles\/design-principle-the-first",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/24\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/24\/revisions",
            "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home\/interaction-design-principles"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 22,
    "title": "Interaction Design Principles",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "",
    "parent": {
        "ID": 2,
        "title": "Home",
        "status": "publish",
        "type": "page",
        "author": {
            "ID": 1,
            "username": "ups_admin",
            "name": "ups_admin",
            "first_name": "",
            "last_name": "",
            "nickname": "ups_admin",
            "slug": "ups_admin",
            "URL": "",
            "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
            "description": "",
            "registered": "2015-07-14T01:26:11+00:00",
            "meta": {
                "links": {
                    "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                    "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
                }
            }
        },
        "content": "",
        "parent": null,
        "link": "http:\/\/mobilestyle.ups.dev\/home\/",
        "date": "2015-07-14T01:26:11",
        "modified": "2015-07-15T16:22:13",
        "format": "standard",
        "slug": "home",
        "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=2",
        "excerpt": null,
        "menu_order": 0,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "date_tz": "UTC",
        "date_gmt": "2015-07-14T01:26:11",
        "modified_tz": "UTC",
        "modified_gmt": "2015-07-15T16:22:13",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home",
                "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
                "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/2\/comments",
                "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/2\/revisions"
            }
        },
        "featured_image": null,
        "terms": []
    },
    "link": "http:\/\/mobilestyle.ups.dev\/home\/interaction-design-principles\/",
    "date": "2015-07-15T16:16:23",
    "modified": "2015-07-15T16:16:23",
    "format": "standard",
    "slug": "interaction-design-principles",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=22",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-15T16:16:23",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-15T16:16:23",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home\/interaction-design-principles",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/22\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/22\/revisions",
            "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 19,
    "title": "search results",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "",
    "parent": null,
    "link": "http:\/\/mobilestyle.ups.dev\/search-results\/",
    "date": "2015-07-14T17:16:46",
    "modified": "2015-07-14T17:17:22",
    "format": "standard",
    "slug": "search-results",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=19",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-14T17:16:46",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-14T17:17:22",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/search-results",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/19\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/19\/revisions"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 15,
    "title": "Getting Started",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "<p>test content zoinkers boinkers<\/p>\n<p>love bat!<\/p>\n<p>&nbsp;<\/p>\n<ul>\n<li>test list<\/li>\n<li>list<\/li>\n<li>now<\/li>\n<\/ul>\n",
    "parent": {
        "ID": 2,
        "title": "Home",
        "status": "publish",
        "type": "page",
        "author": {
            "ID": 1,
            "username": "ups_admin",
            "name": "ups_admin",
            "first_name": "",
            "last_name": "",
            "nickname": "ups_admin",
            "slug": "ups_admin",
            "URL": "",
            "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
            "description": "",
            "registered": "2015-07-14T01:26:11+00:00",
            "meta": {
                "links": {
                    "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                    "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
                }
            }
        },
        "content": "",
        "parent": null,
        "link": "http:\/\/mobilestyle.ups.dev\/home\/",
        "date": "2015-07-14T01:26:11",
        "modified": "2015-07-15T16:22:13",
        "format": "standard",
        "slug": "home",
        "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=2",
        "excerpt": null,
        "menu_order": 0,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "date_tz": "UTC",
        "date_gmt": "2015-07-14T01:26:11",
        "modified_tz": "UTC",
        "modified_gmt": "2015-07-15T16:22:13",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home",
                "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
                "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/2\/comments",
                "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/2\/revisions"
            }
        },
        "featured_image": null,
        "terms": []
    },
    "link": "http:\/\/mobilestyle.ups.dev\/home\/getting-started\/",
    "date": "2015-07-14T17:10:38",
    "modified": "2015-07-24T13:47:10",
    "format": "standard",
    "slug": "getting-started",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=15",
    "excerpt": "<p>test content zoinkers boinkers love bat! &nbsp; test list list now<\/p>\n",
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-14T17:10:38",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-24T13:47:10",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home\/getting-started",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/15\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/15\/revisions",
            "up": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/home"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 13,
    "title": "UPS Mobile (iOS, Android)",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "",
    "parent": null,
    "link": "http:\/\/mobilestyle.ups.dev\/ups-mobile\/",
    "date": "2015-07-14T17:10:12",
    "modified": "2015-07-14T17:10:21",
    "format": "standard",
    "slug": "ups-mobile",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=13",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-14T17:10:12",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-14T17:10:21",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/ups-mobile",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/13\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/13\/revisions"
        }
    },
    "featured_image": null,
    "terms": []
}, {
    "ID": 8,
    "title": "mDot",
    "status": "publish",
    "type": "page",
    "author": {
        "ID": 1,
        "username": "ups_admin",
        "name": "ups_admin",
        "first_name": "",
        "last_name": "",
        "nickname": "ups_admin",
        "slug": "ups_admin",
        "URL": "",
        "avatar": "http:\/\/2.gravatar.com\/avatar\/84bd923a894abcdb86b6094fead5f8c5?s=96",
        "description": "",
        "registered": "2015-07-14T01:26:11+00:00",
        "meta": {
            "links": {
                "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
                "archives": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1\/posts"
            }
        }
    },
    "content": "<p>oinkers zoinkers<\/p>\n",
    "parent": null,
    "link": "http:\/\/mobilestyle.ups.dev\/mdot\/",
    "date": "2015-07-14T16:57:01",
    "modified": "2015-07-14T17:09:40",
    "format": "standard",
    "slug": "mdot",
    "guid": "http:\/\/mobilestyle.ups.dev\/?page_id=8",
    "excerpt": "<p>oinkers zoinkers<\/p>\n",
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "UTC",
    "date_gmt": "2015-07-14T16:57:01",
    "modified_tz": "UTC",
    "modified_gmt": "2015-07-14T17:09:40",
    "meta": {
        "links": {
            "self": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/mdot",
            "author": "http:\/\/mobilestyle.ups.dev\/wp-json\/users\/1",
            "collection": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages",
            "replies": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/8\/comments",
            "version-history": "http:\/\/mobilestyle.ups.dev\/wp-json\/pages\/8\/revisions"
        }
    },
    "featured_image": null,
    "terms": []
}];
		  ServerActionCreators.receivePages(pageArray);
		});
	}

};