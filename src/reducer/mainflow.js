const mainFlow = (db,setMap,messageGenerator)=>{
  return (message,sender)=>{
    return db.getUserState(sender).then((userState)=>{
      return setMap(userState,message)
    }).then((newUserState)=>{
      return db.updateUserState(sender,newUserState).then(()=>{return newUserState})
    }).then((newUserState)=>{
      return messageGenerator(newUserState)
    }).then((message)=>{
      return {
        sender,
        message:message.messageify()
      }
    })
  }
}

export default mainFlow
