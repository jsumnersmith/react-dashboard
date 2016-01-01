var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/Constants');

// Define action methods
var AppActions = {

  // Sample Action
  receiveData: function(data) {
    Dispatcher.handleAction({
      actionType: Constants.SAMPLE_CONSTANT,
      data: data
    })
  },

};

module.exports = AppActions;
