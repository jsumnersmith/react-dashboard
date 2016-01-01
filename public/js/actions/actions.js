var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/Constants');

// Define action methods
var AppActions = {

  // Initial Load of Data
  receiveData: function(data) {
    Dispatcher.handleAction({
      actionType: Constants.DATA_LOAD,
      data: data
    })
  },

};

module.exports = AppActions;
