//Main bootstrapping file.
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.react');
var Data = require('./data/bootstrap');
var ChartAPI = require('./data/chartAPI');

//Initially, load any data here.
Data.init();
ChartAPI.getChartData();

ReactDOM.render(
  <App />,
  document.getElementById('app-mount')
);
