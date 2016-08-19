import MediaMessage from './mediaMessage'

class FileMessage extends MediaMessage {
  constructor(url){
    super("file",url)
  }
  changeUrl(url){
    return new FileMessage(url);
  }
}

export default FileMessage
