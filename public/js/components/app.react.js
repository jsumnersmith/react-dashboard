var React = require('react');
var Store = require('../stores/appStore');
var Actions = require('../actions/actions');
var Sidebar = require('./sidebar.react');
var Main = require('./main.react');


// Define main Controller View
var App = React.createClass({

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div className="rt-app rt-grid">
        <div className="rt-col-2">
          <Sidebar />
        </div>
        <div className="rt-col-10">
          <Main />
        </div>
      </div>
  	);
  },

});

module.exports = App;
