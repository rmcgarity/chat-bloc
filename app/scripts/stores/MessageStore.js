var BlocChatDispatcher = require('../dispatcher/BlocChatDispatcher');
var BlocChatConstants = require('../constants/BlocChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dbUtils = require('../utils/dbUtils.js');
var CHANGE_EVENT = 'change';
var ActionTypes = BlocChatConstants.ActionTypes;

var messages = [];
var currentRoom = null;

var MessageStore = assign({}, EventEmitter.prototype, {
  getMessages: function() {
    return messages;
  },
  getCurrentRoom: function() {
    return currentRoom;
  },
  getLatestRoom: function() {
    return messages && messages[0] && messages[0].roomName ?
      messages[0].roomName : null;
  },
  emitChange: function() {
    MessageStore.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

MessageStore.dispatchToken = BlocChatDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.SHOW_ROOM_MESSAGES:
      dbUtils.updateMessagesFromDb(action.room, messages, MessageStore.emitChange);
      currentRoom = action.room;
      break;
    default: // do nothing
  }
});
// dbUtils.updateMessagesFromDb(rooms, MessageStore.emitChange);

module.exports = MessageStore;

