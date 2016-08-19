'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collection = require('lodash/collection');

var _actions = require('./actions');

var _helper = require('../../helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeLog = function timeLog(req, res, next) {
  console.log('Recieved facebook webhook response: ', Date.now());
  next();
};
var verify = function verify(pass) {
  return function (req, res) {
    if (req.query['hub.verify_token'] === pass) {
      res.send(req.query['hub.challenge']);
    } else {
      res.send('Error, wrong token');
    }
  };
};

var webhook = function webhook(reducer, db) {
  var defaultState = arguments.length <= 2 || arguments[2] === undefined ? { set: "WELCOME", progress: "INIT", payload: {} } : arguments[2];

  return function (req, res) {
    var messaging_events = req.body.entry[0].messaging;
    var messageGroups = (0, _collection.groupBy)(messaging_events, function (m) {
      return m.sender.id;
    });
    Object.keys(messageGroups).map(function (k) {
      var messages = messageGroups[k];
      db.getUserState(k).then(function () {
        var userState = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];

        var lastMessage = messages[messages.length - 1];
        return (0, _helper2.default)(lastMessage);
      }).then(function (msg_type) {
        switch (msg_type) {
          case "QUICK_REPLY":
            return reducer.processPostBackQuickReply(lastMessage.message, userState);
          case "POSTBACK":
            return reducer.processPostBack(lastMessage.postback, userState);
          case "TEXT_MESSAGE":
            if (lastMessage.message.text.changeAt(0) == '/') return reducer.processTextPostback(lastMessage.message, userState);else return reducer.processMessage(lastMessage.message, userState);
          case "ATTACHMENT_MESSAGE":
            return reducer.processAtchMessage(lastMessage.message, userState);
        }
      }).then(function (_ref) {
        var userState = _ref.userState;
        var message = _ref.message;
        var state = userState.state;
        var payload = userState.payload;

        return db.updateUserState(k, state, payload).then(function () {
          return { message: message };
        });
      }).then(function (_ref2) {
        var message = _ref2.message;

        if (message) return (0, _actions.sendMessage)(k, message.messageify());else return { status: "NO_MESSAGE_SENT" };
      }).catch(function (error) {
        console.log("ERROR: " + error);
      });
    });
    res.sendStatus(200);
  };
};

exports.default = { webhook: webhook, verify: verify, timeLog: timeLog };