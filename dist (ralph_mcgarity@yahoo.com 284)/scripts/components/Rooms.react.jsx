var React = require('react');
var RoomRow = require('./RoomRow.react.jsx');

var Rooms = React.createClass({
  getInitialState: function() {
    return {
      rooms : ["1", "2","3"]
    }
  },
  render: function() {
    var roomRows = this.state.rooms.map(function(room) {
      return (
        <RoomRow
          key={room}
          room={room}
        />
      );
    });
    return (
      <div className="rooms">
        <h1>Bloc Chat</h1>
        <table className="room-heading">
          {roomRows}
        </table>
      </div>
    );
  }
});

module.exports = Rooms;