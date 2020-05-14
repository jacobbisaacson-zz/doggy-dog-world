import React, { Component } from 'react'
import Header from '../Header'
import ParkContainer from '../ParkContainer'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'

export default class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }



  render() {
    return(
      <React.Fragment>
        <Header 
          username={this.props.loggedInUserUsername}
          logout={this.props.logout}
        />
      </React.Fragment>
    )
  }
}





