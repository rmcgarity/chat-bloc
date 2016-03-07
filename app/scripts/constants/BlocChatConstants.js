var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    ADD_ROOM: null,
    DELETE_ROOM: null,
    RENAME_ROOM: null,
    SHOW_ROOM_MESSAGES: null
  })
};