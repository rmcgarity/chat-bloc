var BlocChatDispatcher = require('../dispatcher/BlocChatDispatcher');
var BlocChatConstants  = require('../constants/BlocChatConstants');

var ActionTypes = BlocChatConstants.ActionTypes;

module.exports = {

  roomClick: function(room) {
    console.log("Room Click for room '" + room + "'");
    BlocChatDispatcher.dispatch({
      type: ActionTypes.SHOW_ROOM_MESSAGES,
      room: room
    });
  }
};