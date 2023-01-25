import React, { useEffect, useState } from 'react';
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import { IVideo } from './types';
import _ from 'lodash';

const {REACT_APP_API_KEY} = process.env;

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState<IVideo>();
  const [videos, setVideos] = useState<IVideo[]>([]);

  const videoSearch = (searchPhrase: string) => {
    YTSearch({ key: REACT_APP_API_KEY, term: searchPhrase }, (dataVideos: IVideo[]) => {
      setVideos(dataVideos);
      setSelectedVideo(dataVideos[0])
    });
  }
  
  const debounceSearch = _.debounce((term) => {
    videoSearch(term);
  }, 300);
  
  useEffect(() => {
    videoSearch("liverpool")
  }, []);
  
  return (
    <div>
      <SearchBar onSearchTermChange={debounceSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList
        onVideoSelect={(selectedVideo: IVideo) => setSelectedVideo(selectedVideo)}
        videos={videos}
      />
    </div>
  );
}

export default App;
