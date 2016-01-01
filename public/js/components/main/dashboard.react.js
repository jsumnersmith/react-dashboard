var React = require('react');
var Store = require('../../stores/appStore');
var Actions = require('../../actions/actions');
var Chart = require('./dashboard/chart.react');
var _ = require('lodash');

var Dashboard = React.createClass({
  render: function() {
    var data = Store.getComparison();
  	return (
      <div className="rt-dashboard rt-grid">
        { Object.keys(data).map(function(key){
          return <Chart name={key} data={data[key]} />
        }) }
      </div>
  	);
  }

});

module.exports = Dashboard;
