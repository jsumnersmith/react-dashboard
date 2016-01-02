var React = require('react');
var Store = require('../../stores/appStore');
var Actions = require('../../actions/actions');
var Graph = require('./channels/graph.react.js');

var Channels = React.createClass({

  render: function() {
    var data = Store.getChannels();
  	return (
      <div className="rt-channels">
        { Object.keys(data).map(function(key){
          return <Graph name={key} data={data[key]} />
        }) }
      </div>
  	);
  }

});

module.exports = Channels;
