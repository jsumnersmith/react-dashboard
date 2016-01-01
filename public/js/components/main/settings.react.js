var React = require('react');
var Store = require('../../stores/appStore');
var Actions = require('../../actions/actions');

var Settings = React.createClass({

  render: function() {
  	return (
      <div className="rt-settings">
        <p>I am settings</p>
      </div>
  	);
  }

});

module.exports = Settings;
