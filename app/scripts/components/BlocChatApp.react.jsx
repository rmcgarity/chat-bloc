var React = require('react');
var Rooms = require('./Rooms.react.jsx');

var BlocChatApp = React.createClass({
    return (
      <div className="chatapp">
        <div className="leftColStyle">
          <Rooms />
        </div>
        <div className="rightColStyle">
          Hello
        </div>
      </div>
    );
  }
});

module.exports = BlocChatApp;