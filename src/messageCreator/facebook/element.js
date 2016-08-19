class Element {
  constructor(title,image_url,subtitle,buttons){
    this.title = title,
    this.image_url = image_url,
    this.subtitle = subtitle,
    this.buttons = buttons
  }
  addButton(button){
    return new Element(this.title,this.image_url,this.subtitle,this.buttons.push(button))
  }
  addButtons(buttons){
    return new Element(this.title,this.image_url,this.subtitle,this.buttons.concat(buttons))
  }

  messageify() {
    const {title,imageUrl,subtitle,buttons} = this;
    return {title,imageUrl,subtitle,buttons}
  }
}


export default Element
