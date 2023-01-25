import React, { Component } from "react";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import { IVideo } from './types';

export const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM";

interface IProps {}

interface IState {
  videos: IVideo[];
  selectedVideo: IVideo | null;
}

class App extends Component<IProps, IState> {
  /**
   * Lifecycle method that initializes the state of the component
   * @param {*} props
   */
  constructor(props: IProps) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  /**
   * Lifecycle method that is being called just after the component did mount
   */
  componentDidMount() {
    this.videoSearch("liverpool");
  }

  /**
   * Function that gets the search-term and returns a list of videos
   * @param {*} term
   */
  videoSearch(term: string) {
    YTSearch({ key: API_KEY, term: term }, (videos: IVideo[]) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  /**
   * Lifecycle method that is responsible to make the component visible to the browser
   */
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo: IVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
