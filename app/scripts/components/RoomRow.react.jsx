var React  = require('react');
var Button = require('react-bootstrap/lib/Button');
var MessagesActionCreators = require("../actions/MessagesActionCreators");
var RoomRow = React.createClass({
  roomRowClick: function(roomName, roomRowThis) {
    MessagesActionCreators.roomClick(roomName);
  },
  render: function() {
    var roomRowThis = this;
    return (
      <div room-row><p>
        <Button bsStyle="info" bsSize="small"
          onClick={function() {roomRowThis.roomRowClick(roomRowThis.props.roomName, roomRowThis)
          }}
        >
          {this.props.roomName} Room
        </Button>
      </p></div>
    );
  }
});

module.exports = RoomRow;
