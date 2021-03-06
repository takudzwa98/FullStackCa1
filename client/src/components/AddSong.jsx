import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import './main.css'
import * as Config        from '../config.json'

class AddSong extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    title     : ''
  }
  state = {
    artist     : ''
  }
  state = {
    releasedate    : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the song. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='#' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/'>Back to All songs</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding song...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a song</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Title:
                <input type='' value={this.state.title} onChange={this.handleTitleUpdate.bind(this)} />
              </label>
            </div>
            <div>
            <label>Artist:
                <input type='' value={this.state.artist} onChange={this.handleArtistUpdate.bind(this)} />
              </label>
            </div>
            <div>
            <label>ReleaseDate:
                <input type='' value={this.state.releasedate} onChange={this.handleReleaseDatetUpdate.bind(this)} />
              </label>
            </div>

            {/* <div>
              <label>song Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Add Song' />
            </div>
  
          </form>
          <Link to='/'>Back to All songs</Link>
        </div>
      );
    }
  }

  handleTitleUpdate(e) {
    this.setState({title: e.target.value || null});
  }

  handleReleaseDatetUpdate(e) {
    this.setState({releasedate: e.target.value || null});
  }

  handleArtistUpdate(e) {
    this.setState({artist: e.target.value || null});
  }

  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.songsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        title     : this.state.title,
        artist     : this.state.artist,
        releasedate : this.state.releasedate,
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/song/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.songID);
  }

}

export default AddSong;
