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

var webhook = function webhook(reducer) {
  return function (req, res) {
    var messaging_events = req.body.entry[0].messaging;
    var messageGroups = (0, _collection.groupBy)(messaging_events, function (m) {
      return m.sender.id;
    });
    Object.keys(messageGroups).map(function (k) {
      var messages = messageGroups[k];
      var lastMessage = messages[messages.length - 1];
      reducer(lastMessage, k).then(function (_ref) {
        var message = _ref.message;

        if ({ sender: sender, message: message }) return (0, _actions.sendMessage)(sender, message);else return { status: "NO_MESSAGE_SENT" };
      }).catch(function (error) {
        console.log("ERROR: " + error);
      });
    });
    res.sendStatus(200);
  };
};

exports.default = { webhook: webhook, verify: verify, timeLog: timeLog };