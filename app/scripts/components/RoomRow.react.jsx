var React = require('react');
var RoomRow = React.createClass({
  render: function() {
    return (
      <tr className="room-row">
        <td>Room {this.props.room}</td>
        <td></td>
      </tr>
    );
  }
});

module.exports = RoomRow;
