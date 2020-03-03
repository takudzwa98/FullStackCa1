import React    from 'react';
import {Router} from "@reach/router";
import Songs   from './Songs';
import Song    from './Song';
import AddSong from './AddSong';
import Header from './Header';
import Nvrbar       from './Nvrbar';
class App extends React.Component {

  render() {
    return (
      <div>
      <Nvrbar />
      <Router>
        <Songs   path='/' />
        <Song    path='/song/:songID' />
        <AddSong path='/add-song/' />
        <Header  path ='./Header'/>
      </Router>
      </div>
    );
  }

}

export default App;
