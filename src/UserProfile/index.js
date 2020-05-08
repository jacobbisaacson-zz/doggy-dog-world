import React, { Component } from 'react'
import AddUserForm from '../AddUserForm'

export default class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: ''
    }
  }
  render() {
    return(
      <React.Fragment>
        <h3>User Profile</h3>
          <AddUserForm />
      </React.Fragment>
    )
  }
}

// in here conditinal logic for displaying either the new user form or the edit user modal