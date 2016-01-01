var Actions = require('../actions/actions');

module.exports = {
  loadData: function() {
    var data = JSON.parse(localStorage.getItem('chart'));
    Actions.receiveAllData(data);
  }



};
