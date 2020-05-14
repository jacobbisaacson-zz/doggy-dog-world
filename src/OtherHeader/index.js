import React, { Component } from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import '../index.css'
import ParkContainer from '../ParkContainer'
import DogProfile from '../DogProfile'

export default class OtherHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  showParkContainer = () => {
    console.log("happening on showParkContainer");
    this.setState({
      show: true
    })
  }

  render() {
    return(
      <div>
      {
      this.state.show
      ?
      <React.Fragment>
        <ParkContainer />
        <DogProfile />
      </React.Fragment>
      :
      <Segment clearing>
        <Header as='h4'>
          <Image circular floated='right' src='https://i.imgur.com/6A5vim9.jpg?2'/>
              <p>Logged in as {this.props.username}.&nbsp;
                <span className="fake-link" onClick={this.props.logout}>(Log out)</span>
              </p>
              <p>See Parks
                <span className="fake-link" onClick={this.showParkContainer}>See Parks Here</span>
              </p>
        </Header>
      </Segment>
      }
      </div>
    )
  }
}
