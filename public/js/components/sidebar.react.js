var React = require('react');
var classNames = require('classnames');
var Store = require('../stores/appStore');
var Actions = require('../actions/actions');
// Define main Controller View
var Sidebar = React.createClass({

  getInitialState: function(){
    return {view: Store.getView()}
  },

  updateView: function(view){
    Actions.setView(view)
  },

  isActive: function(view){
    return this.state.view === view;
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {

  	return (
      <nav className="rt-sidebar">
        <ul className="rt-nav-items">
          <li className={"rt-nav-item " + (this.isActive('Dashboard') ? 'active' : '')} onClick={this.updateView.bind(this, "Dashboard")}>
            <i className="material-icons">dashboard</i>
            Dashboard
          </li>
          <li className={"rt-nav-item " + (this.isActive('Channels') ? 'active' : '')} onClick={this.updateView.bind(this, "Channels")}>
            <i className="material-icons">timeline</i>
            Channels
          </li>
          <li className={"rt-nav-item " + (this.isActive('Settings') ? 'active' : '')} onClick={this.updateView.bind(this, "Settings")}>
            <i className="material-icons">settings</i>
            Settings
          </li>
        </ul>
      </nav>
  	);
  },

  _onChange: function(){
    this.setState({view: Store.getView()})
  }

});

module.exports = Sidebar;
