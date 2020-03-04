import React    from 'react';
import {Router} from "@reach/router";
import Songs   from './Songs';
import Song    from './Song';
import AddSong from './AddSong';
import Header from './Header';
import Nvrbar       from './Nvrbar';
import Imageslider       from './Imageslider';
class App extends React.Component {

  render() {
    return (
      <div>
      <Nvrbar />
     
      <Header  path ='./Header'/>
      <Router>
        <Songs   path='/' />
        <Song    path='/song/:songID' />
        <AddSong path='/add-song/' />
      </Router>
      <Imageslider/>
      </div>
    );
  }

}

export default App;
