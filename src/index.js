import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();



function PlayButton(props) {
    const className = props.isMusicPlaying ? 'play active' : 'play';
      return (
        <a onClick={props.onClick} href="#" title="Play video" className={className}  />
      );
    }
  
   class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isMusicPlaying: false };
    }
  
    handleClick(event) {
      if (this.state.isMusicPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
        }
    };
  
  
      render() {
        const status = this.state.isMusicPlaying ? 'Playing' : 'Not playing';
  
        return (
          <div>
            <h1 onClick={this.handleClick.bind(this)}>{ status }</h1>
            <PlayButton onClick={this.handleClick.bind(this)} isMusicPlaying={this.state.isMusicPlaying} />
            <audio id="audio" ref={(audioTag) => { this.audio = audioTag }}/>
          </div>
        );
      }
    }
   const placeWeWantToPutComponent = document.getElementById('hook');
   ReactDOM.render(<Container />, placeWeWantToPutComponent);

