import React, { Component } from 'react'
import { Form, Button, Label, Modal, Header } from 'semantic-ui-react'
import '../index.css'

export default class EditDogModal extends Component {
  constructor(props) {
    super(props)

    console.log("props in constructor in EditDogModal");
    console.log(props);

    this.state = {
      name: props.dogToEdit.name,
      breed: props.dogToEdit.breed
    }
  }  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateDog(this.state)
  }

  render() {

    return(
      <Modal open={true} closeIcon={true} onClose={this.props.closeModal}> 
        <Header>
          <h3>Enter new info</h3>
        </Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input 
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter a name"
              onChange={this.handleChange}
            />
            <Label>Breed:</Label>
            <Form.Input 
              type="text"
              name="breed"
              value={this.state.breed}  
              placeholder="Enter a breed"
              onChange={this.handleChange}
            />
            <Modal.Actions>
              <Button type="Submit">Update Dog</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>
    )    
  }
}