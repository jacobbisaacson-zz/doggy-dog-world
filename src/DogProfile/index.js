import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'
import AddDogForm from '../AddDogForm'
import DogList from '../DogList'

export default class DogProfile extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			breed: '',
			owner: ''
			// img: []
		}
	}
  render() {
    return(
      <React.Fragment>
        <h3>Dog Profile</h3>
          <DogList />
          <AddDogForm />
      </React.Fragment>
    )
  }
}

// in here conditinal logic for displaying either the add Dog form or the edit dog modal