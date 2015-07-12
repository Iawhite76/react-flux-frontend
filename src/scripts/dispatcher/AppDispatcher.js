const Constants = require('../constants/Constants.js')
		Dispatcher = require('flux').Dispatcher;

let PayloadSources = Constants.PayloadSources,
    assign = require('object-assign');

let Dispatcher = assign(new Dispatcher(), {

  handleServerAction(action) {
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction(action) {
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = Dispatcher;
