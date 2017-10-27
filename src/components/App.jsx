class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playing: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }
  
  componentDidMount() {
    this.getYouTubeVideos('nic cage'); 
  }
  
  onVideoClick(videoObject) {
    console.log('click', videoObject);
    this.setState( {playing: videoObject});
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) => {
      this.setState({videos: videos, playing: videos[0]}); 
    });
  }

  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer playing={this.state.playing}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={this.onVideoClick.bind(this)}/> 
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
