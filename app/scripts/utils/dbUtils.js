// Utilities to abstract database interactions with FireBase

var Firebase = require("firebase");
var blocChatDb = new Firebase("https://bloc-chat-rmcgarity.firebaseio.com/");

module.exports = {

  updateRoomsFromDb: function(rooms, onChangeFunction) {
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
    var blocChatDbData;
    
    blocChatDb.child("rooms").on("value", function(snapshot) {
      blocChatDbData = snapshot.val();
      if (!blocChatDbData) {
        blocChatDb.set(bootStrapData);
      } else {
        rooms.length = 0;
        blocChatDbData.forEach(function(roomRec) {
          rooms.push(roomRec.roomId);
        });
        onChangeFunction();
      }
    });
  }
};
