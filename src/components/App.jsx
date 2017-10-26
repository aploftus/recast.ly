class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playing: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  onVideoClick(event) {
    console.log('click', event.target);
    this.setState( {playing: video});
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
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
