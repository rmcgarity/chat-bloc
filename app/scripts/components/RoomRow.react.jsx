var React = require('react');
var RoomRow = React.createClass({
  render: function() {
    return (
      <div className="room-row">
        {this.props.roomName} Room
      </div>
    );
  }
});

module.exports = RoomRow;
