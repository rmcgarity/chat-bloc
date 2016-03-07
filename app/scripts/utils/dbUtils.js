// Utilities to abstract database interactions with FireBase

var Firebase = require("firebase");
var Moment = require("moment");
var blocChatDb = new Firebase("https://bloc-chat-rmcgarity.firebaseio.com/");
var roomsDbData;
var messagesDbData;

module.exports = {

  setUpRoomsDbTrigger: function(rooms, onChangeFunction) {
    var bootStrapData = {
      rooms: [
        { roomName: "Red"
        },
        { roomName: "Blue"
        },
        { roomName: "Green"
        }
      ],
      messages: [
        {username: "jclark",
         content:  "Hi Ralph",
         sentAt:   "2016-03-02 09:13:19Z",
         roomName: "Blue"
        },
        {username: "rmcgarity",
         content:  "Hi John",
         sentAt:   "2016-03-02 09:16:22Z",
         roomName: "Blue"
        },
        {username: "mclark",
         content:  "Hi Ida",
         sentAt:   "2016-03-05 15:36:04Z",
         roomName: "Red"
        },
        {username: "ihmcgarity",
         content:  "Hi Mary",
         sentAt:   "2016-03-06 08:14:51Z",
         roomName: "Red"
        }
      ]
    };
    
    blocChatDb.child("rooms").on("value", function(snapshot) {
      roomsDbData = snapshot.val();
      if (!roomsDbData) {
        blocChatDb.set("rooms");
        bootStrapData.rooms.forEach(function(roomRec) {
          blocChatDb.child("rooms").push(roomRec);
        });
        bootStrapData.messages.forEach(function(messageRec) {
          blocChatDb.child("messages").child(messageRec.roomName).push({
            username: messageRec.username,
            content: messageRec.content,
            sentAt: messageRec.sentAt
          });
        });
      } else {
        rooms.length = 0;
        for (var key in roomsDbData) {
          if (roomsDbData.hasOwnProperty(key)) {
            var roomRec = roomsDbData[key];
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
    for (var key in roomsDbData.child("rooms")) {
      if (roomsDbData.hasOwnProperty(key)) {
        if (room == roomsDbData[key]) {
          blocChatDb.child("rooms").remove(key);
          return;
        }
      }
    }
  },
  updateMessagesFromDb: function(room, messages, onChangeFunction) {
    if (messages && messages[0] && messages[0].roomName) {
      // We've already set up a FireBase listener, so we must remove it
      blocChatDb.child("messages").child(messages[0].roomName).off("value");
    }
    blocChatDb.child("messages").child(room).on("value", function(snapshot) {
      console.log("Message changed");
      messagesDbData = snapshot.val();
      messages.length = 0;
      if (messagesDbData) {
        for (var key in messagesDbData) {
          if (messagesDbData.hasOwnProperty(key)) {
            var messageDbDatum = messagesDbData[key];
            messages.push({
              key: key,
              roomName: room,
              username: messageDbDatum.username,
              content:  messageDbDatum.content,
              sentAt:   messageDbDatum.sentAt
            });
          }
        }
      }
      onChangeFunction();
    });
  }
};
