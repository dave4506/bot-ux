import Message from './message'

class GenericMessage extends Message {
  constructor(elements){
    super();
    this.elements = elements
  }
  messageify(){
    var primedElements = []
    this.elements.map((e)=>{
      primedElements.push(e.messageify())
    })
    return Object.assign({},super.messageify(),{
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "elements":primedElements
        }
      }
    })
  }
  addElement(element){
    return new GenericMessage(this.elements.push(element))
  }
  addElements(elements){
    return new GenericMessage(this.elements.concat(elements))
  }
}

export default GenericMessage
