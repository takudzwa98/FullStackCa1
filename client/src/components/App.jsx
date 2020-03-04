import React    from 'react';
import {Router} from "@reach/router";
import Songs   from './Songs';
import Song    from './Song';
import AddSong from './AddSong';
import Header from './Header';
import Nvrbar       from './Nvrbar';
import Imageslider  from './Imageslider';
import UsersList from './UsersList';

class App extends React.Component {

  render() {
    return (
      <div>
      <Nvrbar />
      <Header  path ='./Header.'/>
     
      <Router>
        <Songs   path='/' />
        <Song    path='/song/:songID' />
        
      </Router>
      <AddSong path='/add-song/' />
      <UsersList/>
      <Imageslider/>
      </div>
    );
  }

}

export default App;
