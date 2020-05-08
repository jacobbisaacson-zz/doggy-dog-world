import React, { Component } from 'react'

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
      <h3>User Profile</h3>
      
    )
  }
}

// in here conditinal logic for displaying either the new user form or the edit user modal