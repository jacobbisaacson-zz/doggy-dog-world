import React, { Component } from 'react'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

	render() {
    // console.log("here is this.state in render() in ProfileContainer");
    // console.log(this.state);
		return(
      <React.Fragment>
			<h2> Profile Container </h2>
        <UserProfile />
        <DogProfile />
      </React.Fragment>
		)
	}
}


