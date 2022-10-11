import './App.css';

function App() {
  const videos = ['bigbuck.mp4', 'kiriko.mp4'];

  return (
    <div>
      {videos.map((video) => (
        <video id="videoPlayer" key={video} controls width="320" height="240" autoPlay>
          <source src={'http://localhost:8000/video/' + video} type="video/mp4" />
        </video>
      ))}
      {/* <video id="videoPlayer" width="650" controls muted="muted" autoplay>
        <source src="http://localhost:8000/video/bigbuck.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
}

export default App;
