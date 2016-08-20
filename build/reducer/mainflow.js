'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = require('../helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var determineMessage = _helper2.default.determineMessage;

var mainFlow = function mainFlow(db, setMap, messageGenerator) {
  return function (message, sender) {
    return db.getConvState(sender).then(function (convState) {
      message.msg_type = determineMessage(message);
      return setMap(convState, message);
    }).then(function (responsedConvState) {
      return messageGenerator(responsedConvState);
    }).then(function (_ref) {
      var message = _ref.message;
      var postMsgState = _ref.postMsgState;

      return db.updateConvState(sender, postMsgState).then(function () {
        return message;
      });
    }).then(function (message) {
      return {
        sender: sender,
        message: message.messageify()
      };
    });
  };
};

exports.default = mainFlow;