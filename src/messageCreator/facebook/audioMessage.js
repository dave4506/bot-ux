import MediaMessage from './mediaMessage'

class AudioMessage extends MediaMessage {
  constructor(url){
    super("audio",url)
  }
  changeUrl(url){
    return new AudioMessage(url);
  }
}

export default AudioMessage
