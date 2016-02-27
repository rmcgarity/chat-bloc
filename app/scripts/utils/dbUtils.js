// Utilities to abstract database interactions with FireBase

var Firebase = require("firebase");
var blocChatDb = new Firebase("https://bloc-chat-rmcgarity.firebaseio.com/");
var blocChatDbData;

module.exports = {

  updateRoomsFromDb: function(rooms, onChangeFunction) {
    var bootStrapData = {
      rooms: [
        { roomName: "Red"
        },
        { roomName: "Blue"
        },
        { roomName: "Green"
        }
      ]
    };
    
    blocChatDb.child("rooms").on("value", function(snapshot) {
      blocChatDbData = snapshot.val();
      if (!blocChatDbData) {
        blocChatDb.set("rooms");
        bootStrapData.rooms.forEach(function(roomRec) {
          blocChatDb.child("rooms").push(roomRec);
        });
       } else {
        rooms.length = 0;
        for (var key in blocChatDbData) {
          if (blocChatDbData.hasOwnProperty(key)) {
            var roomRec = blocChatDbData[key];
            rooms.push(roomRec.roomName);
          }
        }
        onChangeFunction();
      }
    });
  },
  addRoomToDb: function(room) {
    blocChatDb.child("rooms").push({roomName: room});
  },
  deleteRoomFromDb: function(room) {
    for (var key in blocChatDbData.child("rooms")) {
      if (blocChatDbData.hasOwnProperty(key)) {
        if (room == blocChatDbData[key]) {
          blocChatDb.child("rooms").remove(key);
          return;
        }
      }
    }
  }
};
