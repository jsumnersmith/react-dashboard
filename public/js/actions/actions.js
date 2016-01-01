var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/Constants');

// Define action methods
var AppActions = {

  // Initial Load of Data
  receiveAllData: function(data) {
    Dispatcher.handleAction({
      actionType: Constants.DATA_LOAD,
      data: data
    })
  },

  setView: function(view) {
    Dispatcher.handleAction({
      actionType: Constants.CHANGE_VIEW,
      view: view
    })
  },

};

module.exports = AppActions;
