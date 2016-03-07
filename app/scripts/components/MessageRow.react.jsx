var React = require('react');

var MessageRow = React.createClass({
  render: function() {
    var message = this.props.message;
    return(
        <div className={this.props.count == (this.props.messageTotal - 1) ? 
            "last-message-row": "message-row"}>
          <div className="message-username">
            {message.username}
          </div>
          <div className="message-content">
            {message.content}
          </div>
          <div className="message-sent-at">
            {message.sentAt}
          </div>
          <div>message key is: '{message.key}'</div>
          <div>passed count is: '{this.props.count}'</div>
          <div>message total: '{this.props.messageTotal}'</div>
        </div>
    );
  }
});

module.exports = MessageRow;