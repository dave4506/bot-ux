class Button {
  constructor(type,title){
    this.type = type, this.title = title;
  }
  messageify(){
    return {
      "type":this.type,
      title:this.title
    }
  }
}

export default Button
