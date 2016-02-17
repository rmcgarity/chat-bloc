var BlocChatAppDispatcher = require('../dispatcher/BlocChatDispatcher');
// var BlocChatConstants = require('../constants/BlocChatConstants');
var EventEmitter = require('events').EventEmitter;
var Firebase = require("firebase");
var assign = require('object-assign');
var blocChatDb = new Firebase("https://bloc-chat-rmcgarity.firebaseio.com/");
// var ActionTypes = BlocChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var bootStrapData = {
  1: {
    roomType: "room",
    room: "1"
  },
  2: { roomType: "room",
    room: "2"
  },
  3: { roomType: "room",
    room: "3"
  }
};

var rooms = [];

var blocChatDbData;

blocChatDb.on("value", function(snapshot) {
  blocChatDbData = snapshot.val();
  if (!blocChatDbData) {
    blocChatDb.set(bootStrapData);
  } else {
    blocChatDbData.forEach(function(roomRec) {
      if (roomRec.roomType == "room") {
        if (rooms.indexOf(roomRec.room) == -1) {
          rooms.push(roomRec.room);
        }
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
