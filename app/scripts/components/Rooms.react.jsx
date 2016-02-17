var React = require('react');
var RoomRow = require('./RoomRow.react.jsx');
var RoomStore = require('../stores/RoomStore.js');

var Rooms = React.createClass({
  getRoomStoreState: function() {
    return {
      rooms: RoomStore.getAllRooms()
    }
  },
  getInitialState: function() {
    return this.getRoomStoreState();
  },
  componentDidMount: function() {
    RoomStore.addChangeListener(this.onRoomStoreChange);
  },

  componentWillUnmount: function() {
    RoomStore.removeChangeListener(this.onRoomStoreChange);
  },
  render: function() {
    if (this.state.rooms) {
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
            <tbody>
              {roomRows}
            </tbody>
          </table>
        </div>
      );
    }
  },
  onRoomStoreChange() {
    this.setState(this.getRoomStoreState());
  }
});

module.exports = Rooms;