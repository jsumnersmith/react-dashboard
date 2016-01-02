var React = require('react');
var Store = require('../../../stores/appStore');
var Actions = require('../../../actions/actions');
var lineGraph = require('./lineGraph');

var Graph = React.createClass({
  cssName: function(name){
    return name.replace(/\s+/g, '-').toLowerCase();
  },

  componentDidMount: function(){
    return lineGraph(this.props.data, "graph-" + this.cssName(this.props.name));
  },
  render: function() {
    var name = this.props.name;
  	return (
      <div className="rt-graph rt-col-12">
        <section className="rt-section">
          <h4 className="rt-section-title">{name}</h4>
          <div className="rt-section-inner">
            <div id={"graph-" + this.cssName(name)}></div>
          </div>
        </section>
      </div>
  	);
  }

});

module.exports = Graph;
