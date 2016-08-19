import Message from './message'

class ButtonMessage extends Message {
  constructor(text,buttons){
    super();
    this.text = text;
    this.buttons = buttons || [];
  }
  addButton(button){
    return new ButtonMessage(this.text,this.buttons.push(button))
  }
  addButtons(buttons){
    return new ButtonMessage(this.text,this.buttons.concat(buttons))
  }
  changeText(text){
    return new ButtonMessage(text,this.buttons)
  }
  messageify(){
    var primedButtons = []
    this.buttons.map((b)=>{
      primedButtons.push(b.messageify());
    })
    return Object.assign({},super.messageify(),{
      attachment:{
        "type":"template",
        "payload":{
          "template_type":"button",
          text:this.text,
          "buttons":primedButtons
        }
      }
    })
  }
}
export default ButtonMessage
