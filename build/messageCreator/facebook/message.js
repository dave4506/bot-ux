"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
  function Message() {
    _classCallCheck(this, Message);

    if (this.messageify === undefined) {
      throw new TypeError("Must override method");
    }
    this.quickReplies = [];
  }

  _createClass(Message, [{
    key: "messageify",
    value: function messageify() {
      var primedQr = [];
      this.quickReplies.map(function (q) {
        primedQr.push(q.messageify());
      });
      if (this.quickReplies.length < 1) return {};else return {
        quick_replies: primedQr
      };
    }
  }, {
    key: "addQuickReply",
    value: function addQuickReply(qr) {
      this.quickReplies.push(qr);
    }
  }, {
    key: "addQuickReplies",
    value: function addQuickReplies(qrs) {
      this.quickReplies.concat(qrs);
    }
  }]);

  return Message;
}();

exports.default = Message;