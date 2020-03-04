import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config2.json'
import './main.css';

class Chart extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.chart && this.state.chartLoaded === true) {
      return (
        <p>Error loading charts. Try again later.</p>
      );
    } else if (!this.state.chart) {
      return (
        <p>Loading charts...</p>
      );
    } else if (this.state.chart.length === 0) {
      return (
        <p>Sorry, no charts are available</p>
      );
    } else {
      return (
        <div className="table">
          <h1>Chart name</h1><p>{this.state.chart.title}</p>
          <p>---------------------------------------------</p>
          <h1>Artist</h1><p>{this.state.chart.artist}</p>
          <p>---------------------------------------------</p>
          <h1>Release Date</h1><p>{this.state.chart.chartno}</p>
          <Link to='/'>Back to All charts</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config2.chartsAPI}/${this.props.chartID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({chart       : json});
        this.setState({chartLoaded : true});
      })
      .catch(err => {
        this.setState({chartLoaded: true});
      });
  }

}

export default Chart;
