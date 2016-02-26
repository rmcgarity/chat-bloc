var React         = require('react');
var Button        = require('react-bootstrap/lib/Button');
var Modal         = require('react-bootstrap/lib/Modal');
var Input         = require('react-bootstrap/lib/Input');
var ButtonInput   = require('react-bootstrap/lib/ButtonInput');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var RoomsActionCreators = require('../actions/RoomsActionCreators');

var roomIsUnique = function(newRoomName, roomArray) {
  var retVal = true;
  roomArray.forEach(function(thisRoom) {
    if (thisRoom == newRoomName) {
      retVal = false;
    }
  });
  return retVal;
}
var AddRoom = React.createClass({

  getInitialState: function() {
    return {
      newRoomName: "",
      addRoomSubmitDisabled: true,
      showAddRoomModal: false
    }
  },

  openAddRoom: function() {
    this.setState({ showAddRoomModal: true});
  },

  closeAddRoom: function() {
    this.setState({ showAddRoomModal: false});
  },

  addNewRoom: function(event) {
    event.preventDefault();
    console.log("add new room");
    RoomsActionCreators.addRoom(this.state.newRoomName);
    this.closeAddRoom();
    return false;
  },

  handleRoomNameChange: function() {
    var inputString = this.refs.nameInput.getValue();
    this.setState({newRoomName: inputString});
  },

  nameValidationState: function() {
    if (this.state.newRoomName.length > 0 &&
      roomIsUnique(this.state.newRoomName, this.props.rooms)
    ) {
      return "success" ;
    } else {
      return "error";
    }
  },

  addRoomSubmitAllowed: function() {
    return( this.state.newRoomName.length > 0 
           && roomIsUnique(this.state.newRoomName, this.props.rooms));
  },

  render: function() {
      return(
        <div className="static-modal">
          <Button bsStyle="primary" bsSize="small" onClick={this.openAddRoom}>
            New Room
          </Button>
          <Modal show={this.state.showAddRoomModal} onHide={this.close} bsSize="small">
            <Modal.Header>
              <Modal.Title>
                Create new room
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Input
                  type="text" label= "Room Name" placeholder="Enter Room Name"
                  ref="nameInput" bsStyle={this.nameValidationState()}
                  hasFeedback groupClassName="group-class" labelClassName="label-class"
                  value={this.state.newRoomName} onChange={this.handleRoomNameChange}
                />
                <ButtonToolbar>
                  <Button
                    onClick={this.addNewRoom}
                    disabled={!this.addRoomSubmitAllowed()}
                    bsStyle={this.addRoomSubmitAllowed() ? "success" : "default"}
                  >Submit</Button>
                  <Button type="reset" onClick={this.closeAddRoom}>Cancel</Button>
                </ButtonToolbar>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      );
  }
});
module.exports = AddRoom;

