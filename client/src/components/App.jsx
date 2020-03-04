import React    from 'react';
import {Router} from "@reach/router";
import Songs   from './Songs';
import Song    from './Song';
import AddSong from './AddSong';
import Charts   from './Charts';
import Chart    from './Chart';
import AddChart from './AddChart';
import Header from './Header';
import Nvrbar       from './Nvrbar';
import Imageslider  from './Imageslider';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div>
      <Nvrbar />
      <Header  path ='./Header.'/>
      <Imageslider/> 
      <Router>
        <Songs   path='/' />
        <Song    path='/song/:songID' />
        <AddSong path='/add-song/' />
      </Router>
      
      <Router>
        <Charts   path='/' />
        <Chart    path='/chart/:chartID' />
        <AddChart path='/add-chart/' />
      </Router>
      <Footer/>
     
      
    
      </div>
    );
  }

}

export default App;
