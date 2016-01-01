var React = require('react');
var Store = require('../../../stores/appStore');
var Actions = require('../../../actions/actions');

var Chart = React.createClass({

  render: function() {
    var data = this.props.data;
    var name = this.props.name;
  	return (
      <div className="rt-chart rt-col-4">
        <h3>{name}</h3>
        <code>foo = {data.foo}</code>
      </div>
  	);
  }

});

module.exports = Chart;
