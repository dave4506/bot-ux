const determineMessage = (post) => {
  if(post.message){
    if(post.message.quick_reply){
      return "QUICK_REPLY"
    } else if(post.message.attachments) {
      return "ATTACHMENT_MESSAGE"
    } else {
      return "TEXT_MESSAGE"
    }
  }
  if(post.postback){
    return "POSTBACK"
  }
  if(post.read){
    return "MESSAGE_READ"
  }
  return "UNSUPPORTED"
}

const isUserState = (state) => {
  if(state["set"] && state["progress"])
    return true
  else
    return false
}

export default {
  determineMessage,isUserState
}
