import {groupBy} from 'lodash/collection'
import {sendMessage} from './actions'
import determineMessage from '../../helper'

const timeLog = (req, res, next) => {
  console.log('Recieved facebook webhook response: ', Date.now());
  next();
}
const verify = (pass) => {
  return (req,res)=> {
    if (req.query['hub.verify_token'] === pass) {
        res.send(req.query['hub.challenge'])
    } else {
      res.send('Error, wrong token')
    }
  }
}

const message = (reducer) => {
  return (req,res)=>{
    let messaging_events = req.body.entry[0].messaging
    const messageGroups = groupBy(messaging_events,(m)=>{return m.sender.id})
    Object.keys(messageGroups).map((k)=>{
      var messages = messageGroups[k]
      const lastMessage = messages[messages.length-1];
      reducer(lastMessage,k).then(({message})=>{
        if ({sender,message})
          return sendMessage(sender,message)
        else
          return {status:"NO_MESSAGE_SENT"}
      }).catch((error)=>{
        console.log("ERROR: " + error);
      })
    })
    res.sendStatus(200)
  }
}

export default {message,verify,timeLog}
