"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mainFlow = function mainFlow(db, setMap, messageGenerator) {
  return function (message, sender) {
    return db.getUserState(sender).then(function (userState) {
      return setMap(userState, message);
    }).then(function (newUserState) {
      return db.updateUserState(sender, newUserState).then(function () {
        return newUserState;
      });
    }).then(function (newUserState) {
      return messageGenerator(newUserState);
    }).then(function (message) {
      return {
        sender: sender,
        message: message.messageify()
      };
    });
  };
};

exports.default = mainFlow;