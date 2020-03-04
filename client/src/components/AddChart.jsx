import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import './main.css'
import * as Config2        from '../config2.json'

class AddChart extends React.Component {

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
    chartno    : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the chart. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='#' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/'>Back to All charts</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding chart...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a Album</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Album Name:
                <input type='' value={this.state.title} onChange={this.handleTitleUpdate.bind(this)} />
              </label>
            </div>
            <div>
            <label>Artist:
                <input type='' value={this.state.artist} onChange={this.handleArtistUpdate.bind(this)} />
              </label>
            </div>
            <div>
            <label>Tracks:
                <input type='' value={this.state.chartno} onChange={this.handleChartnotUpdate.bind(this)} />
              </label>
            </div>

            {/* <div>
              <label>chart Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Add Chart' />
            </div>
  
          </form>
          <Link to='/'>Back to All Albums</Link>
        </div>
      );
    }
  }

  handleTitleUpdate(e) {
    this.setState({title: e.target.value || null});
  }

  handleChartnotUpdate(e) {
    this.setState({chartno: e.target.value || null});
  }

  handleArtistUpdate(e) {
    this.setState({artist: e.target.value || null});
  }

  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config2.chartsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        title     : this.state.title,
        artist     : this.state.artist,
        chartno : this.state.chartno,
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/chart/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.chartID);
  }

}

export default AddChart;
