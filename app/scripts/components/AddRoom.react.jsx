var React         = require('react');
var Button        = require('react-bootstrap/lib/Button');
var Modal         = require('react-bootstrap/lib/Modal');
var Input         = require('react-bootstrap/lib/Input');
var ButtonInput   = require('react-bootstrap/lib/ButtonInput');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

var AddRoom = React.createClass({

  getInitialState: function() {
    return {
      newRoomId: "",
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
    this.closeAddRoom();
    return false;
  },
  handleRoomIdChange: function() {
    var inputString = this.refs.idInput.getValue();
    // Don't let user enter non-digits
    newString = inputString.replace(/[^0-9]/g, "");
    this.setState({newRoomId: newString});
  },
  handleRoomNameChange: function() {
    this.setState({newRoomName: this.refs.nameInput.getValue()});
  },
  idValidationState: function() {
    if (this.state.newRoomId.length > 0) {
      // Enable submission if both fields are non-empty
      // this.setState({addRoomSubmitDisabled: (this.state.newRoomName.length > 0)});
      return "success";
    } else {
      return "error";
    }
  },
  nameValidationState: function() {
    if (this.state.newRoomName.length > 0) {
      // Enable submission if both fields are non-empty
      //this.setState({addRoomSubmitDisabled: (this.state.newRoomId.length > 0)});
      return "success" ;
    } else {
      return "error";
    }
  },
  addRoomSubmitAllowed: function() {
    return( this.state.newRoomName.length > 0 && this.state.newRoomId.length > 0);
  },
  render: function() {
      return(
        <div className="static-modal">
          <Button bsStyle="primary" bsSize="small" onClick={this.openAddRoom}>
            New Room
          </Button>
          <Modal show={this.state.showAddRoomModal} onHide={this.close}>
            <Modal.Header>
              <Modal.Title>
                Create new room
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Input
                  type="text" label="Room Number" placeholder="Enter Room Number"
                  ref="idInput" bsStyle={this.idValidationState()}
                  hasFeedback groupClassName="group-class" labelClassName="label-class"
                  value={this.state.newRoomId} onChange={this.handleRoomIdChange}
                />
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

