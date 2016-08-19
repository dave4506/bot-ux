"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(title, image_url, subtitle, buttons) {
    _classCallCheck(this, Element);

    this.title = title, this.image_url = image_url, this.subtitle = subtitle, this.buttons = buttons;
  }

  _createClass(Element, [{
    key: "addButton",
    value: function addButton(button) {
      return new Element(this.title, this.image_url, this.subtitle, this.buttons.push(button));
    }
  }, {
    key: "addButtons",
    value: function addButtons(buttons) {
      return new Element(this.title, this.image_url, this.subtitle, this.buttons.concat(buttons));
    }
  }, {
    key: "messageify",
    value: function messageify() {
      var title = this.title;
      var imageUrl = this.imageUrl;
      var subtitle = this.subtitle;
      var buttons = this.buttons;

      return { title: title, imageUrl: imageUrl, subtitle: subtitle, buttons: buttons };
    }
  }]);

  return Element;
}();

exports.default = Element;