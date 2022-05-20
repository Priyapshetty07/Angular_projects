import React, { useState } from 'react';

export default class HooksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(
        (success) => {
          this.setState({
            isLoaded: true,
            users: success.data
          });
        },
        (error) => {
          this.setState({
            error: error

          });
        }
      )

  }
  render() {
    const { users, isLoaded, error } = this.state;

    return (
      <ul>
        {users.map(item => (
          <li key={item.id}>
            {item.first_name} {item.last_name}
          </li>
        ))}
      </ul>
    )
  }
}





