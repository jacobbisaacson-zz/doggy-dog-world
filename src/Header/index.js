import React, { Component } from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import '../index.css'
// import ParkContainer from '../ParkContainer'

export default class MainHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props, "props in header");
    return(
      <Segment clearing style={{ height: 70, textAlign: 'center' }}>
        <Header as='h3'>
          <Image circular floated='right' src='https://i.imgur.com/6A5vim9.jpg?2'/>
          <p>Logged in as: {this.username}.&nbsp;<span className="fake-link" onClick={this.props.logout}>(Log out)</span></p>
        </Header>
      </Segment>
    )
  }
}