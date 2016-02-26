var React = require('react');
var RoomRow = React.createClass({
  render: function() {
    return (
      <tr key={this.props.key} className="room-row">
        <td key={this.props.key} >{this.props.roomName} Room</td>
        <td key={this.props.key + "_blankColumnSpacer"}></td>
      </tr>
    );
  }
});

module.exports = RoomRow;
