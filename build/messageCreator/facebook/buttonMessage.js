"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _message = require("./message");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonMessage = function (_Message) {
  _inherits(ButtonMessage, _Message);

  function ButtonMessage(text, buttons) {
    _classCallCheck(this, ButtonMessage);

    var _this = _possibleConstructorReturn(this, (ButtonMessage.__proto__ || Object.getPrototypeOf(ButtonMessage)).call(this));

    _this.text = text;
    _this.buttons = buttons || [];
    return _this;
  }

  _createClass(ButtonMessage, [{
    key: "addButton",
    value: function addButton(button) {
      return new ButtonMessage(this.text, this.buttons.push(button));
    }
  }, {
    key: "addButtons",
    value: function addButtons(buttons) {
      return new ButtonMessage(this.text, this.buttons.concat(buttons));
    }
  }, {
    key: "changeText",
    value: function changeText(text) {
      return new ButtonMessage(text, this.buttons);
    }
  }, {
    key: "messageify",
    value: function messageify() {
      var primedButtons = [];
      this.buttons.map(function (b) {
        primedButtons.push(b.messageify());
      });
      return Object.assign({}, _get(ButtonMessage.prototype.__proto__ || Object.getPrototypeOf(ButtonMessage.prototype), "messageify", this).call(this), {
        attachment: {
          "type": "template",
          "payload": {
            "template_type": "button",
            text: this.text,
            "buttons": primedButtons
          }
        }
      });
    }
  }]);

  return ButtonMessage;
}(_message2.default);

exports.default = ButtonMessage;