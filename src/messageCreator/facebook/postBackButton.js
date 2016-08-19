import Button from './button'

class PostBackButton extends Button {
  constructor(title,payload){
    super("postback",title);
    this.payload = JSON.stringify(payload);
  }
  messageify(){
    var button = super.messageify();
    button.payload = this.payload;
    return button;
  }
}

export default PostBackButton
