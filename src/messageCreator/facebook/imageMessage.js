import MediaMessage from './mediaMessage'

class ImageMessage extends MediaMessage {
  constructor(url){
    super("image",url)
  }
  changeUrl(url){
    return new ImageMessage(url);
  }
}

export default ImageMessage
