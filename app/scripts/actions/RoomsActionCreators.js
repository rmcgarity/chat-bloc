var BlocChatDispatcher = require('../dispatcher/BlocChatDispatcher');
var BlocChatConstants  = require('../constants/BlocChatConstants');

var ActionTypes = BlocChatConstants.ActionTypes;

module.exports = {

  addRoom: function(room) {
    BlocChatDispatcher.dispatch({
      type: ActionTypes.ADD_ROOM,
      room: room
    });
  }
};