var React = require('react');
var Store = require('../stores/appStore');
var Actions = require('../actions/actions');
// Define main Controller View
var Sidebar = React.createClass({

  // // Get initial state from stores
  // getInitialState: function() {
  //   return getAppState();
  // },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <nav className="rt-sidebar">
        <ul className="rt-nav-items">
          <li className="rt-nav-item">
            <i className="material-icons">dashboard</i>
            Dashboard
          </li>
          <li className="rt-nav-item">
            <i className="material-icons">timeline</i>
            Channels
          </li>
          <li className="rt-nav-item">
            <i className="material-icons">settings</i>
            Settings
          </li>
        </ul>
      </nav>
  	);
  },

  // Method to setState based upon Store changes
  // _onChange: function() {
  //   this.setState(getAppState());
  // }

});

module.exports = Sidebar;
