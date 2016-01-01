var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/constants');
var _ = require('lodash');

// Define initial data points
var _view = "Dashboard", _data = {};

function setView(view){
  _view = view;
}

function setData(data){
  _data = data;
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var Store = _.extend({}, EventEmitter.prototype, {

  // Return view state object
  getView: function() {
    return _view;
  },

  getData: function(){
    return _data;
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
    case Constants.CHANGE_VIEW:
      setView(action.view)
      break;
    case Constants.DATA_LOAD:
      setData(action.data)
      break;
    default:
      return true;
  }

  // If action was responded to, emit change event
  Store.emitChange();

  return true;

});

module.exports = Store;
