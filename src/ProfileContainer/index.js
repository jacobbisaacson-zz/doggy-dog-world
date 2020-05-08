import React, { Component } from 'react'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    this.getDogs()
  }

  getDogs = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/dogs/"
      const dogsResponse = await fetch(url, {
        credentials: 'include'
      })
      const dogsJson = await dogsResponse.json()
      this.setState({
        dogs: dogsJson.data
      })
    } catch(err) {
      console.error("Error getting dog data.", err)
    }
  }

	render() {
    console.log("here is this.state in render() in ProfileContainer");
    console.log(this.state);
		return(
      <React.Fragment>
			<h2> Profile Container </h2>
        <UserProfile />
        <DogProfile />
      </React.Fragment>
		)
	}
}


