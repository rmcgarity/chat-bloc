var BlocChatAppDispatcher = require('../dispatcher/BlocChatDispatcher');
// var BlocChatConstants = require('../constants/BlocChatConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// var ActionTypes = BlocChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var RoomStore = assign({}, EventEmitter.prototype, {
  bootstrapTemp: function() {
    return ["1", "2","3"];
  }
});
module.exports = RoomStore;