var React = require('react');
var Rooms = require('./Rooms.react.jsx');

var BlocChatApp = React.createClass({
  render: function() {
    var leftColStyle = {backgroundColor: 'lightgrey'};
    return (
      <div className="chatapp">
        <table>
          <colgroup>
            <col style={leftColStyle}></col>
            <col></col>
          </colgroup>
          <tbody>
            <tr>
              <td><Rooms /></td>
              <td>Hello</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = BlocChatApp;