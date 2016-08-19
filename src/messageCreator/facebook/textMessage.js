import Message from './message'

class TextMessage extends Message {
  constructor(text){
    super()
    this.text = text;
  }
  messageify(){
    return Object.assign({},super.messageify(),{text:this.text})
  }
  changeText(text){
    return new TextMessage(text);
  }
}

export default TextMessage
