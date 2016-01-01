var React = require('react');
var Store = require('../../../stores/appStore');
var Actions = require('../../../actions/actions');
var pieChart = require('./pieChart');

var Chart = React.createClass({
  cssName: function(name){
    return name.replace(/\s+/g, '-').toLowerCase();
  },

  componentDidMount: function(){
    return pieChart(this.props.data, "chart-" + this.cssName(this.props.name));
  },
  render: function() {
    var name = this.props.name;
  	return (
      <div className="rt-chart rt-col-4">
        <section className="rt-section">
          <h3 className="rt-section-title">{name}</h3>
          <div className="rt-section-inner">
            <div id={"chart-" + this.cssName(name)}></div>
            <div id={"chart-" + this.cssName(name) + '-legend'}></div>
          </div>
        </section>
      </div>
  	);
  }

});

module.exports = Chart;
