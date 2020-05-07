import React, { Component } from 'react'

export default class DogContainer extends Component {
  constructor(props) {
    super(props)
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
      const dogsResponse = await fetch(url)
      const dogsJson = await dogsResponse.json()
      console.log("here is the data we got in getDogs in DogContainer:");
      console.log(dogsJson);
    } catch(err) {
      console.error("Error getting dog data.", err)
    }
  }

	render() {
		return(
			<h2> Dog Container</h2>
		)
	}
}


