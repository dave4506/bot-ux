"use strict";

var _helper = require("../helper");

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var determineMessage = _helper2.default.determineMessage;

var askInputState = function askInputState(finishState, inputNeeded) {
  var customCondition = arguments.length <= 2 || arguments[2] === undefined ? function (m) {
    return true;
  } : arguments[2];

  return function (message, userState) {
    if (determineMessage(message) == inputNeeded && customCondition(message)) return Object.assign({}, finishState, { payload: message });else return Object.assign({}, userState, { progress: "INCORRECT" });
  };
};