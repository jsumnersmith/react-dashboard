//Main bootstrapping file.
var React = require('react');
var App = require('./components/app.react');

//Initially, load any data here.

React.render(
  <App />,
  document.getElementById('app-mount')
);
