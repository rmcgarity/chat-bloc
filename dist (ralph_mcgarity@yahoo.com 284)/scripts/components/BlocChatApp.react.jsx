var Rooms = require('./Rooms.react.jsx');
var React = require('react');
// var Rooms = require('./Messages.react.jsx');

var BlocChatApp = React.createClass({

  render: function() {
    return (
      <div className="chatapp">
        <Rooms />
        {/* <Messages /> */}
      </div>
    );
  }
});

module.exports = BlocChatApp;