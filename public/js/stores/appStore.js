var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/constants');

// Define initial data points
var _data = {}, _state = false;

// Set cart visibility
function setData(data) {
  _data = data;
}

function sample(){
  return "hello";
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var Store = _.extend({}, EventEmitter.prototype, {

  // Return data items
  getData: function() {
    return _data;
  },

  // Return state object
  getData: function() {
    return _state;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
Dispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to SAMPLE_CONSTANT action
    case Constants.SAMPLE_CONSTANT:
      //Run a method...
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  Store.emitChange();

  return true;

});

module.exports = Store;
