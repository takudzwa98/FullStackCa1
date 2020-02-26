import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Song extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.song && this.state.songLoaded === true) {
      return (
        <p>Error loading songs. Try again later.</p>
      );
    } else if (!this.state.song) {
      return (
        <p>Loading songs...</p>
      );
    } else if (this.state.song.length === 0) {
      return (
        <p>Sorry, no songs are available</p>
      );
    } else {
      return (
        <div>
          <h1>Song name</h1><p>{this.state.song.title}</p>
          <p>---------------------------------------------</p>
          <h1>Artist</h1><p>{this.state.song.artist}</p>
          <p>---------------------------------------------</p>
          <h1>Release Date</h1><p>{this.state.song.releasedate}</p>
          <Link to='/'>Back to All songs</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.songsAPI}/${this.props.songID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({song       : json});
        this.setState({songLoaded : true});
      })
      .catch(err => {
        this.setState({songLoaded: true});
      });
  }

}

export default Song;
