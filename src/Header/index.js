import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import '../index.css'

export default function TheHeader(props) {
  return(
    <Segment clearing>
      <Header as='h4'>
        <Image floated='right' src='https://i.imgur.com/6A5vim9.jpg?2' />
            <p>Logged in as {props.username}.&nbsp;
              <span className="fake-link" onClick={props.logout}>(Log out)</span>
            </p>
      </Header>
    </Segment>
  )
}
