import React from 'react';

var Link = require('react-router').Link

class UsersList extends React.Component {
constructor(_props) {
  super();
  this.state = {
    usersData: []
  };
}


componentDidMount() {
    fetch('http://localhost:3003/api/inlogg').then(function (response) {
      return response.json();
    }).then(function (result) {
      this.setState({
        usersData: result
      });
      }.bind(this))
  }

  render () {
    return this.state.usersData.map(function (user) {
                return <div className="dropdown" key={user._id}>
                  <li>{user.userName}</li>
                  <div className="dropdown-content"><Link to={"/privatchatt/"+user.userName+"/"+sessionStorage.getItem("username")} target="_blank"><p>Starta privatchatt med {user.userName}</p></Link>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>;
              }
            )
          }
        }
export default UsersList;