var React = require('react');
var RoomRow = require('./RoomRow.react.jsx');
var RoomStore = require('../stores/RoomStore.js');
var AddRoom = require('./AddRoom.react.jsx');

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
            roomName={room}
          />
        );
      });
      return (
        <div className="leftsection">
          <div className="rooms">
            <div className="blocchat">Bloc Chat</div><br></br>
            {roomRows}
          </div>
          <div className="addroom">
            <AddRoom rooms={this.state.rooms}></AddRoom>
          </div>
        </div>
      );
    }
  },
  onRoomStoreChange: function() {
    this.setState(this.getRoomStoreState());
  }
});

module.exports = Rooms;