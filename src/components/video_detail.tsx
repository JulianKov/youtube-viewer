import React from "react";
import { Comments } from './comments';
import { IVideo } from '../types';

interface IProps {
  video?: IVideo
}

const VideoDetail: React.FC<IProps> = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={video.snippet.title}
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        <Comments videoId={videoId}/>
      </div>
    </div>
  );
};

export default VideoDetail;
