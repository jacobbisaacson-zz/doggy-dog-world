import React, { Component } from 'react'
import AddUserForm from '../AddUserForm'

export default class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      user: []
      // idOfUser: -1
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = async() => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/"
      const userResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("userResponse", userResponse);
      const userJson = await userResponse.json()
      console.log("userJson", userJson);
      this.setState({
        user: userJson.data
      })
    } catch(err) {
      console.error("ERROR getting USER DATA", err)
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