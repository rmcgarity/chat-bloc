var React = require('react');
var Rooms = require('./Rooms.react.jsx');

var BlocChatApp = React.createClass({
  render: function() {
    var leftColStyle = {
      float: "left",
      width: "40%",
      height: "100%",
      padding: "20px 20px",
      backgroundColor: 'lightgrey'
    };
    var rightColStyle = {
      float: "left"
    };
    return (
      <div className="chatapp">
        <div style={leftColStyle}>
          <Rooms />
        </div>
        <div style={rightColStyle}>
          Hello
        </div>
      </div>
    );
  }
});

module.exports = BlocChatApp;