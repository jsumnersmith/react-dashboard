var React = require('react');
var Store = require('../../stores/appStore');
var Actions = require('../../actions/actions');

var Channels = React.createClass({

  render: function() {
  	return (
      <div className="rt-channels">
        <p>This is my channels</p>
      </div>
  	);
  }

});

module.exports = Channels;
