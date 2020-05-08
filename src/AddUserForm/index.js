import React, { useState } from 'react'
import { Form, Button, Input, Select, TextArea, } from 'semantic-ui-react'
import '../index.css'

const options = [
    { key: 'v', text: 'Very', value: 'very' },
    { key: 'k', text: 'Kinda', value: 'kinda' },
    { key: 'm', text: 'Meh...', value: 'meh' },
]

export default function AddUserForm(props) {
  const [userProfileInfo, setUserProfileInfo] = useState({
    name: '',
    clean: '',
    fenced: '',
    busy: '',
    big: ''
  })


  const handleChange = (event) => {
    setUserProfileInfo({
      ...userProfileInfo,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createUserProfile(userProfileInfo)
  }

  // const { value } = this.state
  return (
    <Form 
      onSubmit={handleSubmit}
      className='add-user-form'
    >
      <Form.Group 
        widths='equal'>
        <Form.Field
          control={Input}
          label='Name'
          // value={this.state.name}
          placeholder="What's your name, human?: "
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label='Clean'
          options={options}
          placeholder='How important is a clean dog park to you?: '
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label='Fenced'
          options={options}
          placeholder='How important is a fenced-in dog park to you?: '
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label='Busy'
          options={options}
          placeholder='How important is a busy dog park to you?: '
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label='Big'
          options={options}
          placeholder='How important is a big dog park to you?: '
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group 
        inline
        className="notes-text-box"
      >
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




