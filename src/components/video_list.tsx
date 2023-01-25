import React from "react";
import VideoListItem from "./video_list_item";
import { IVideo } from '../types';

type IProps = {
  onVideoSelect: (selectedVideo: IVideo) => void;
  videos: IVideo[];
}

const VideoList: React.FC<IProps> = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
