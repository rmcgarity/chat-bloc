var React = require('react');
var MessageStore = require('../stores/MessageStore');
var MessagesActionCreators = require('../actions/MessagesActionCreators');
var MessageRow = require('./MessageRow.react.jsx');

var Messages = React.createClass({
  getMessageStoreState : function() {
    return {
      messages: MessageStore.getMessages(),
      currentRoom: MessageStore.getCurrentRoom()
    };
  },
  getInitialState: function() {
    return {
      messages: [],
      currentRoom: null
     }
  },
  componentDidMount: function() {
    MessageStore.addChangeListener(this.onMessageStoreChange);
  },
  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this.onMessageStoreChange);
  },
  render: function() {
    messageTotal = this.state.messages.length;
    if (messageTotal > 0) {
      var count = 0;
      var messageRows = this.state.messages.map(function(message) {
        return (
          <MessageRow
            key= {message.key}
            message ={message}
            count= {count++}
            messageTotal= {messageTotal}
          />
        );
      });
      return(
        <div className="messages">
          <div className="message-heading">
            {this.state.messages[0].roomName} Room
          </div>
          <div className="Messagesbody">
            {messageRows}
          </div>
        </div>
      );
    } else {
      return <h3>{this.state.currentRoom != null ? "No messages" : "Click a room to see messages"}</h3>;
    }
  },
  onMessageStoreChange: function() {
    this.setState(this.getMessageStoreState());
    console.log("Made it to onMessageStoreChange");
  }
});

module.exports = Messages;