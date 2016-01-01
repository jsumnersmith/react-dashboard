var chart = require('./data.js');
module.exports = {
  init: function(){
    localStorage.clear();
    localStorage.setItem('chart', JSON.stringify(chart))
  }
}
