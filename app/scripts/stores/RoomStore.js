var BlocChatDispatcher = require('../dispatcher/BlocChatDispatcher');
var BlocChatConstants = require('../constants/BlocChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dbUtils = require('../utils/dbUtils.js')
var CHANGE_EVENT = 'change';
var ActionTypes = BlocChatConstants.ActionTypes;

var rooms = [];

var RoomStore = assign({}, EventEmitter.prototype, {
  getAllRooms: function() {
    return rooms;
  },
  emitChange: function() {
    RoomStore.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

RoomStore.dispatchToken = BlocChatDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.ADD_ROOM:
      dbUtils.addRoomToDb(action.room);
      RoomStore.emitChange();
      break;
    case ActionTypes.DELETE_ROOM:
      dbUtils.deleteRoomFromDb(action.room);
      RoomStore.emitChange();
      break;
    default: // do nothing
  }
});
dbUtils.updateRoomsFromDb(rooms, RoomStore.emitChange);

module.exports = RoomStore;

