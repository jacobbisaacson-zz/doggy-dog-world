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







