import Message from './message'

class MediaMessage extends Message {
  constructor(type,url){
    super()
    this.type = type;
    this.url = url;
  }
  messageify(){
    return Object.assign({},super.messageify(),{
      attachment:{
        "type":this.type,
        payload:{
          url:this.url
        }
      }
    })
  }
}

export default MediaMessage
