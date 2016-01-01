var React = require('react');
var Store = require('../stores/appStore');
var Actions = require('../actions/actions');

//Load any subcomponents here.

// Method to retrieve state from Stores
function getAppState() {
  return {
    //Object reflecting stores:
    // datum: Store.getDatum(),
  };
}

// Define main Controller View
var App = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getAppState();
  },

  // Pulling in actions
  customMethod: function(data){
    return actions.receiveData(data);
  },

  // Add change listeners to stores
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div className="rt-app">
        //Load in sub-components here.
      </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getAppState());
  }

});

module.exports = FluxCartApp;
