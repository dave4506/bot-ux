import helper from '../helper'
const {determineMessage} = helper
const askInputState = (finishState,inputNeeded,customCondition = (m)=>{return true}) => {
  return (message,userState) => {
    if(determineMessage(message) == inputNeeded && customCondition(message))
      return Object.assign({},finishState,{payload:message})
    else
      return Object.assign({},userState,{progress:"INCORRECT"})
  }
}
