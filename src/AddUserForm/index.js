import React, { Component } from 'react'
import { Form, Button, Input, Select, TextArea, } from 'semantic-ui-react'

const options = [
    { key: 'v', text: 'Very', value: 'very' },
    { key: 'k', text: 'Kinda', value: 'kinda' },
    { key: 'm', text: 'Meh...', value: 'meh' },
]

export default class AddUserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      clean: '',
      fenced: '',
      busy: '',
      big: ''
      // img:
    }
  }

  handleChange = (event, { value }) => this.setState({ value })

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUserProfile(this.state)
    this.setState({
      name: '',
      // img:
      clean: '',
      fenced: '',
      busy: '',
      big: ''
    })
  }



  render() {
    // const { value } = this.state
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Name'
            // value={this.state.name}
            placeholder="What's your name, human?: "
            onChange={this.handleChange}
          />
          <Form.Field
            control={Select}
            label='Clean'
            options={options}
            placeholder='How important is a clean dog park to you?: '
            onChange={this.handleChange}
          />
          <Form.Field
            control={Select}
            label='Fenced'
            options={options}
            placeholder='How important is a fenced-in dog park to you?: '
            onChange={this.handleChange}
          />
          <Form.Field
            control={Select}
            label='Busy'
            options={options}
            placeholder='How important is a busy dog park to you?: '
            onChange={this.handleChange}
          />
          <Form.Field
            control={Select}
            label='Big'
            options={options}
            placeholder='How important is a big dog park to you?: '
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group inline>
          <Form.Field
            control={TextArea}
            label='Notes'
            placeholder="Anything else you'd like to let us know?: "
          />
        </Form.Group>
          <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}




