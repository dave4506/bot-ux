class QuickReply {
  constructor(title,payload) {
    this.title = title
    this.payload = JSON.stringify(payload)
  }
  messageify() {
    return {
      "content_type":"text",
      title:this.title,
      payload:this.payload
    }
  }
}


export default QuickReply
