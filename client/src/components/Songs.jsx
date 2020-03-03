import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'
import ''

class Songs extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.songs && this.state.songsLoaded === true) {
      return (
        <p>Error loading songs. Try again later.</p>
      );
    } else if (!this.state.songs) {
      return (
        <p>Loading songs...</p>
      );
    } else if (this.state.songs.length === 0) {
      return (
        <p>Sorry, no songs are available</p>
      );
    } else {
      return (
        <div>
          <h1>Your Playlist</h1>
          <ul>
            {this.state.songs.map(song => (
              <li key={`song_${song._id}`}><Link to={`/song/${song._id}`}>{song.title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-song'>Add a new Song</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.songsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({songs       : json});
        this.setState({songsLoaded : true});
      })
      .catch(err => {
        this.setState({songsLoaded: true});
      });
  }

}

export default Songs;

