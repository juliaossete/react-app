import React, { Component } from 'react';
import '../project3/App.css';
import UsersList from '../project3/UsersList';
import ButtonFetchUsers from '../project3/ButtonFetchUsers'

const API = 'https://randomuser.me/api/?results=1';

class Project3Page extends Component {

  state = {
    users: []
  }

  handleDataFetch = () => {
    // console.log("click");
    fetch(API)
      .then(response => {
        if (response.ok) {
          // console.log(response);
          return response;
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results;

        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }))

      })
      .catch(error => console.log(error + " coś nie tak"))

  }

  render() {

    const users = this.state.users;
    return (
      <div className='Project3Page'>
        <h1>Projekt 3: Losowanie przykładowych użytkowników ze strony -
        <br/>https://randomuser.me/api/?results=1</h1>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default Project3Page;
