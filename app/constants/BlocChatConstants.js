var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    INITIALIZE_ROOMS: null,
    CLICK_ROOM: null,
    CREATE_MESSAGE: null,
    RECEIVE_CREATED_MESSAGE: null,
    RECEIVE_MESSAGES: null
  })

};
