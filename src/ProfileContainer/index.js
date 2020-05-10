import React, { useState } from 'react'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'

// import ParksContainer from '../ParksContainer'

export default function ProfileContainer() {

  return(
    <React.Fragment>
  	<h2> Profile Container </h2>
      <UserProfile />
      <DogProfile />

    </React.Fragment>
  )
}




      // <ParksContainer /> // where do we want this on the profile page?
