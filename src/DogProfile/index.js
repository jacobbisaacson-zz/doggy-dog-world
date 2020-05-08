import React, { Component } from 'react'
// import { Form, Button, Label, Segment } from 'semantic-ui-react'
import AddDogForm from '../AddDogForm'
import DogList from '../DogList'

export default class DogProfile extends Component {
	constructor() {
		super()
		this.state = {
      dogs: []
		}
	}

  componentDidMount() {
    this.getDogs()
  }

  getDogs = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/dogs/"
      const dogsResponse = await fetch(url, {
        credentials: 'include'
      })
      const dogsJson = await dogsResponse.json()
      this.setState({
        dogs: dogsJson.data
      })
    } catch(err) {
      console.error("Error getting dog data.", err)
    }
  }

  render() {
    console.log("here is this.state in render() in DogProfile");
    console.log(this.state);
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