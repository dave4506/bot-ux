import helper from '../helper'
const {determineMessage} = helper
const mainFlow = (db,setMap,messageGenerator)=>{
  return (message,sender)=>{
    return db.getConvState(sender).then((convState)=>{
      message.msg_type = determineMessage(message);
      return setMap(Object.assign({uid:sender},convState),message)
    }).then((responsedConvState)=>{
      return messageGenerator(responsedConvState)
    }).then(({message,postMsgState})=>{
      return db.updateConvState(sender,postMsgState).then(()=>{return message})
    }).then((message)=>{
      return {
        sender,
        message:message.messageify()
      }
    })
  }
}

export default mainFlow
