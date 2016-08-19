class Message {
  constructor(){
    if (this.messageify === undefined) {
      throw new TypeError("Must override method");
    }
    this.quickReplies = []
  }
  messageify(){
    var primedQr = []
    this.quickReplies.map((q)=>{
      primedQr.push(q.messageify())
    })
    if(this.quickReplies.length < 1)
      return {}
    else
      return {
        quick_replies:primedQr
      }
  }
  addQuickReply(qr){
    this.quickReplies.push(qr);
  }
  addQuickReplies(qrs){
    this.quickReplies.concat(qrs);
  }
}

export default Message
