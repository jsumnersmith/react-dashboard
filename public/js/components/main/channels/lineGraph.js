var d3 = require('d3');
var _ = require('lodash');
var colorbrewer = require('colorbrewer');

module.exports = function(oldData, id){
  //Using hard-pixels and overflow for presentation.
  var margin = {top: 20, right: 20, bottom: 75, left: 75},
      width = 1600 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  var histogram = oldData["histogram_data"],
      data = [];
  _.each(histogram["bin_endpoints"], function(bucket, i){
    data.push({"bucket": bucket, "count": histogram["counts"][i]});
  });

  var xValue = function(d) { return d["bucket"];},
      xScale = d3.scale.ordinal().rangeRoundBands([0, width], .1, .5),
      xMap = function(d) { return xScale(xValue(d));},
      xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .tickValues(histogram["bin_endpoints"]);

  var yValue = function(d) { return d["count"];},
      yScale = d3.scale.linear().range([height, 10]),
      yMap = function(d) { return yScale(yValue(d));},
      yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");

  var color = d3.scale.category20();

  var svg = d3.select("#"+id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  xScale.domain(histogram['bin_endpoints']);
  yScale.domain([0, d3.max(data, yValue)]);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("x", 105)
    .attr("y", 30)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Average CE");

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("x", -10)
    .attr("y", -65)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .text("Number of Customers");

  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", xMap)
    .attr("width", xScale.rangeBand)
    .attr("y", yMap)
    .attr("height", function(d) { return height - yMap(d); })
    .attr("style", function(d, i){
      return "fill:" + color(i);
    });
}
