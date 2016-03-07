var React = require('react');
var Rooms = require('./Rooms.react.jsx');
var Messages = require('./Messages.react.jsx');

var BlocChatApp = React.createClass({
  render: function() {
    return (
      <div className="chatapp">
        <div className="leftColStyle">
          <Rooms />
        </div>
        <div className="rightColStyle">
          <Messages />
        </div>
      </div>
    );
  }
});

module.exports = BlocChatApp;