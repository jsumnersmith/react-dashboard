var React = require('react');
var Store = require('../../stores/appStore');
var Actions = require('../../actions/actions');
var Chart = require('./dashboard/chart.react');

function getData(){
  return Store.getData();
}

var Dashboard = React.createClass({

  render: function() {
    var sampleData = {foo: true, bar: false};
  	return (
      <div className="rt-dashboard rt-grid">
        <Chart name="Chart 1" data={sampleData} />
        <Chart name="Chart 2" data={sampleData} />
        <Chart name="Chart 3" data={sampleData} />
      </div>
  	);
  }

});

module.exports = Dashboard;
