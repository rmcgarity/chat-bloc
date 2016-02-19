var React = require('react');
var RoomRow = require('./RoomRow.react.jsx');
var RoomStore = require('../stores/RoomStore.js');
// var Button = require('../../../node_modules/elemental/lib/components/Button.js');
var Button = require('react-bootstrap/lib/Button');

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
          <table className="room-heading">
            <colgroup>
              <col width="170px"></col>
              <col></col>
            </colgroup>
            <tbody>
              <tr>
                <td><h1>Bloc Chat</h1></td>
                <td>
                  <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={function() {console.log("Click")}}
                  >New Room</Button></td>
              </tr>
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