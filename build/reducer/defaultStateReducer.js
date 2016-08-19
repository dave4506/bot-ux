"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setMapGenerator = function setMapGenerator(sets) {
  return function (userState, message) {
    var setFunc = sets[userState.set];
    if (!userState.set) setFunc = sets["welcome"];
    return setFunc ? setFunc(userState, message) : Object.assign({}, userState, { payload: { error: "UNKNOWN_SET" } });
  };
};

var messageGenerator = function messageGenerator(messageSets) {
  return function (userState) {
    var setFunc = messageSets[userState.set];
    return setFunc ? setFunc(userState) : null;
  };
};

exports.default = { setMapGenerator: setMapGenerator, messageGenerator: messageGenerator };