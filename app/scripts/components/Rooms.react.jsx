var React = require('react');
var RoomRow = require('./RoomRow.react.jsx');
var RoomStore = require('../stores/RoomStore.js');
var Rooms = React.createClass({
  getInitialState: function() {
    return {
      rooms: RoomStore.bootstrapTemp()
    };
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