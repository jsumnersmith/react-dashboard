var Actions = require('../actions/actions');

module.exports = {
  getChartData: function() {
    var data = JSON.parse(localStorage.getItem('chart'));
    Actions.receiveData(data);
  }

};
