"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setMapGenerator = function setMapGenerator(sets) {
  return function (userState, message) {
    var setFunc = sets[userState.set];
    return setFunc ? setFunc(userState, message) : Object.assign({}, userState, { payload: { error: "UNKNOWN_SET" } });
  };
};

exports.default = { setMapGenerator: setMapGenerator };