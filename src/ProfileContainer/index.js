import React, { useState } from 'react'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'
import ParkContainer from '../ParkContainer'

export default function ProfileContainer() {

  return(
    <React.Fragment>
  	<h2> Profile Container </h2>
      <UserProfile />
      <DogProfile />
      <ParkContainer />
    </React.Fragment>
  )
}


// conditional logic to display only what we want at the time
// when you register -- the ADD user profile (add user profile) shoudl render
// when you log in, the regular user profile render should happen

// when to render the dog list, the parks list, and all the forms?






