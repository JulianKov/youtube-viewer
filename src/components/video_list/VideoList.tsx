import React from "react";
import { IVideo } from '../../types';
import { VideoListItem } from '../video_list_item';

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
