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
      <Segment size='small' clearing style={{ height: 65, textAlign: 'left' }}>
        <Header size='small'>
          <Image circular floated='right' src='https://i.imgur.com/6A5vim9.jpg?2'/>
          <p>Currently Logged In || <span className="fake-link" onClick={this.props.logout}>Log out</span></p>
        </Header>
      </Segment>
    )
  }
}