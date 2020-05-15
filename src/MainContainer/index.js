import React, { Component } from 'react'
import Header from '../Header'
import ParkContainer from '../ParkContainer'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'
import AddUserForm from '../AddUserForm'

export default class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      prefs: [1, 2]
    }
  }

  showTheThing = () => {
    if (this.state.prefs === null) {
      return "Loading"
    } else {
      if(this.state.prefs.length === 0) {
        return( <AddUserForm /> )
      } else {
        return(
          <React.Fragment>
            <ParkContainer userPrefs={this.state.prefs} />
            <DogProfile />
            <UserProfile userPrefs={this.state.prefs} />
          </React.Fragment>
        )
      }
    }
  }



// this.showTheThing("hello")

    // if prefs is null return hello
    // if prefs is an empty array render the add user form
    // if its an array with something in it, render the other shit


  // put back {card color} in the description of the light color
  // add background color {card color} to the style
  // TONS OF STUFF INT HE PARK CONTAINER NEEDS TO BE ADDED BACK -- last commit

  render() {
    return(
      <React.Fragment>
        <Header 
          username={this.props.loggedInUserUsername}
          logout={this.props.logout}
        />
        { this.showTheThing() }
      </React.Fragment>
    )
  }
}






