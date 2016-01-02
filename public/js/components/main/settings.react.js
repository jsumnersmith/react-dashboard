var React = require('react');
var Store = require('../../stores/appStore');
var Actions = require('../../actions/actions');

var Settings = React.createClass({

  render: function() {
  	return (
      <div className="rt-settings">
        <p className="rt-help-text">You have no settings to update.</p>
        <a className="rt-button">Thanks!</a>
      </div>
  	);
  }

});

module.exports = Settings;
