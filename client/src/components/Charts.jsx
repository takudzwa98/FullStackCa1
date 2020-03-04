import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import './main.css';
import * as Config        from '../config2.json'


class Charts extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.charts && this.state.chartsLoaded === true) {
      return (
        <p>Error loading charts. Try again later.</p>
      );
    } else if (!this.state.charts) {
      return (
        <p>Loading charts...</p>
      );
    } else if (this.state.charts.length === 0) {
      return (
        <p>Sorry, no charts are available</p>
      );
    } else {
      return (
        <div className='yourPlayList'>
          <h1>Your Playlist</h1>
         <center>

          <ul>
            {this.state.charts.map(chart => (
              <li key={`chart_${chart._id}`}><Link to={`/chart/${chart._id}`}>{chart.title}</Link></li>
            ))}
          </ul>
          </center>
          <p><Link className='link'  to='/add-chart'>Add a new Chart To Your PlayList!</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config2.chartsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({charts       : json});
        this.setState({chartsLoaded : true});
      })
      .catch(err => {
        this.setState({chartsLoaded: true});
      });
  }

}

export default Charts;

