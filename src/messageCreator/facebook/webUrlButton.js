import Button from './button'

class WebUrlButton extends Button {
  constructor(title,url){
    super("web_url",title);
    this.url = url;
  }
  messageify(){
    var button = super.messageify();
    button.url = this.url;
    return button;
  }
}

export default WebUrlButton
