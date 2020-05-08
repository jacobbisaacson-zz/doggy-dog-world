import React, { useState } from 'react'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'

export default function ProfileContainer() {

  return(
    <React.Fragment>
  	<h2> Profile Container </h2>
      <UserProfile />
      <DogProfile />
    </React.Fragment>
  )
}


