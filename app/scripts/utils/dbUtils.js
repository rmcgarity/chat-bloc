// Utilities to abstract database interactions with FireBase

var Firebase = require("firebase");
var blocChatDb = new Firebase("https://bloc-chat-rmcgarity.firebaseio.com/");

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
    var blocChatDbData;
    
    blocChatDb.child("rooms").on("value", function(snapshot) {
      blocChatDbData = snapshot.val();
      if (!blocChatDbData) {
        blocChatDb.set(bootStrapData);
      } else {
        rooms.length = 0;
        blocChatDbData.forEach(function(roomRec) {
          rooms.push(roomRec.roomName);
        });
        onChangeFunction();
      }
    });
  }
};
