import MediaMessage from './mediaMessage'

class VideoMessage extends MediaMessage {
  constructor(url){
    super("video",url)
  }
  changeUrl(url){
    return new VideoMessage(url);
  }
}
export default VideoMessage
