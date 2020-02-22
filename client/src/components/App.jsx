import React    from 'react';
import {Router} from "@reach/router";
import Songs   from './Songs';
import Song    from './Song';
import AddCake from './AddCake';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Songs   path='/' />
        <Song    path='/song/:songID' />
        <AddSong path='/add-song/' />
      </Router>
    );
  }

}

export default App;
