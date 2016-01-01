var React = require('react');
var Store = require('../stores/appStore');
var Actions = require('../actions/actions');
var Channels = require('./main/channels.react');
var Dashboard = require('./main/dashboard.react');
var Settings = require('./main/settings.react');

function getView(){
  return {view: Store.getView()}
}

var Main = React.createClass({

  getInitialState : function() {
    return getView();
  },
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },
  setView: function(state){
    switch (state.view) {
      case 'Dashboard':
        return <Dashboard />
        break;
      case 'Channels':
          return <Channels />
          break;
      case 'Settings':
          return <Settings />
          break;
      default:
        return <Dashboard />
    }
  },
  render: function() {
    console.log(this.state);
  	return (
      <div className="rt-main">
        { this.setView(this.state) }
      </div>
  	);
  },
  _onChange: function(){
    this.setState(getView());
  }


});

module.exports = Main;
