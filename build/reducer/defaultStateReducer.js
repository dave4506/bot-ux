"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setMapGenerator = function setMapGenerator(sets) {
  return function (convState, message) {
    var setFunc = sets[convState.set];
    if (!convState.set) setFunc = sets["welcome"];
    return setFunc ? setFunc(convState, message) : Object.assign({}, convState, { payload: { error: "UNKNOWN_SET" } });
  };
};

var messageGenerator = function messageGenerator(messageSets) {
  return function (convState) {
    var setFunc = messageSets[convState.set];
    return setFunc ? setFunc(convState) : null;
  };
};

exports.default = { setMapGenerator: setMapGenerator, messageGenerator: messageGenerator };