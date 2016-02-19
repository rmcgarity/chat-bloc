var BlocChatAppDispatcher = require('../dispatcher/BlocChatDispatcher');
// var BlocChatConstants = require('../constants/BlocChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dbUtils = require('../utils/dbUtils.js')
// var ActionTypes = BlocChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

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

dbUtils.updateRoomsFromDb(rooms, RoomStore.emitChange);

module.exports = RoomStore;

