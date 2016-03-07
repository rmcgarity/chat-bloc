var React = require('react');

var MessageRow = React.createClass({
  render: function() {
    var message = this.props.message;
    var isOddMessageRow = this.props.isOddMessageRow;
    var lastMessage = this.props.messageTotal-1;
    return(
      <div className={this.props.isOddMessageRow ? "odd-message-row" : "even-message-row"}>
        <div className={this.props.count == lastMessage ? "last-message-row" : "not-last-message-row"}>
        <div className="message-row">
          <div className="message-username-content">
            <div className="message-username">
              {message.username}
            </div>
            <div className="message-content">
              {message.content}
            </div>
          </div>
          <div className="message-sent-at">
            {message.sentAt}
          </div>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = MessageRow;