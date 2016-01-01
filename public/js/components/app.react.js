var React = require('react');
var Store = require('../stores/appStore');
var Actions = require('../actions/actions');
var Sidebar = require('./sidebar.react');

//Load any subcomponents here.

// Method to retrieve state from Stores
function getAppState() {
  return {
    //Object reflecting stores:
    data: Store.getData(),
  };
}

// Define main Controller View
var App = React.createClass({

  //Get initial state from stores
  getInitialState: function() {
    return getAppState();
  },
  //
  // // Add change listeners to stores
  // componentDidMount: function() {
  //   Store.addChangeListener(this._onChange);
  // },
  //
  // // Remove change listeners from stores
  // componentWillUnmount: function() {
  //   Store.removeChangeListener(this._onChange);
  // },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div className="rt-app rt-grid">
        <div className="rt-col-2">
          <Sidebar />
        </div>
        <div className="rt-col-10">
        <p>Main Content</p>
        </div>
      </div>
  	);
  },

  // Method to setState based upon Store changes
  // _onChange: function() {
  //   this.setState(getAppState());
  // }

});

module.exports = App;
