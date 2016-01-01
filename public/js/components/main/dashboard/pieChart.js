var d3 = require('d3');
var _ = require('lodash');
var colorbrewer = require('colorbrewer');

module.exports = function(data, id){
  var el = document.getElementById(id).parentNode;
  var w = el.offsetWidth * .85;
  var h = w;
  var r = h/2;
  var rect = 18;
  var spacing = 4;
  var color = d3.scale.category10();
  //ordinal().range(colorbrewer.RdBu[6]);

  var newData = []
  _.map(data, function(datum){
    _.forIn(datum, function(value, key){
      return newData.push({"label": key, "value": value});
    });
  });

  console.log("New Data is: ", newData);


  var vis = d3.select('#' + id).append("svg:svg")
    .data([newData])
    .attr("width", w)
    .attr("height", h * 1.6)
    .append("svg:g")
    .attr("transform", "translate(" + r + "," + r + ")");
  var pie = d3.layout.pie()
    .value(function(d){return d.value;});

  // declare an arc generator function
  var arc = d3.svg.arc().innerRadius(r - 60).outerRadius(r);

  // select paths, use arc generator to draw
  var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("svg:g")
    .attr("class", "slice");

  arcs.append("svg:path")
    .attr("fill", function(d, i){
      return color(i);
    })
    .attr('stroke', '#ECF0F1')
    .attr('stroke-width', 5)
    .attr("d", function (d) {
      return arc(d);
    });

  // add the text
  arcs.append("svg:text")
    .attr("transform", function(d){
    	d.innerRadius = 0;
    	d.outerRadius = r;
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text( function(d, i) {
      return newData[i].label;
    });

    console.log(color.domain());
    var legend = vis.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) {
          var height = rect + spacing;
          var offset =  -Math.abs(h -100);
          var horz = -Math.abs(w - 200);
          var vert = i * height - offset;
          return 'translate(' + horz + ',' + vert + ')';
        });

    legend.append('rect')
      .attr('width', rect)
      .attr('height', rect)
      .style('fill', color)
      .attr('stroke', '#eee')
      .attr('stroke-width', 1);

    legend.append('text')
      .attr('x', rect + spacing)
      .attr('y', rect - spacing)
      .text(function(d, i) { return newData[i].label + ': '+newData[i].value; })
      // .attr('stroke', '#2C3E50')
      // .attr('stroke-width', 1);;
}
