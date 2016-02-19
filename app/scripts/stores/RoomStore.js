var BlocChatAppDispatcher = require('../dispatcher/BlocChatDispatcher');
// var BlocChatConstants = require('../constants/BlocChatConstants');
var EventEmitter = require('events').EventEmitter;
var Firebase = require("firebase");
var assign = require('object-assign');
var blocChatDb = new Firebase("https://bloc-chat-rmcgarity.firebaseio.com/");
// var ActionTypes = BlocChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var bootStrapData = {
  rooms: [
    { roomName: "Red",
      roomId: "1"
    },
    { roomName: "Blue",
      roomId: "2"
    },
    { roomName: "room",
      roomId: "3"
    }
  ]
};

var rooms = [];

var blocChatDbData;

blocChatDb.child("rooms").on("value", function(snapshot) {
  blocChatDbData = snapshot.val();
  if (!blocChatDbData) {
    blocChatDb.set(bootStrapData);
  } else {
    blocChatDbData.forEach(function(roomRec) {
      if (rooms.indexOf(roomRec.roomId) == -1) {
        rooms.push(roomRec.roomId);
      }
    });
    RoomStore.emitChange();
  }
});

var RoomStore = assign({}, EventEmitter.prototype, {
  getAllRooms: function() {
    return rooms;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});
module.exports = RoomStore;

