import React, { useState } from 'react'
import { Form, Button, Input, Select, TextArea } from 'semantic-ui-react'
import '../index.css'
// import '../styles.css'

const options = [
    { key: 'v', text: 'Very', value: 'very' },
    { key: 'k', text: 'Kinda', value: 'kinda' },
    { key: 'm', text: 'Meh...', value: 'meh' },
]

export default function AddUserForm({ createUser }) {
  const [userProfile, setUserProfile] = useState({
    name: '',
    clean: '',
    fenced: '',
    busy: '',
    big: ''
  })

  const handleChange = event => {
    setUserProfile({
      ...userProfile,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    createUser(userProfile)
  }

  return (
    <Form 
      onSubmit={handleSubmit}
      className="this-form"
    >
        <Form.Field
          control={Input}
          label='Name'
          name='name'
          // value={this.state.name}
          placeholder="What's your name, human?: "
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label='Clean'
          name='clean_pref'
          options={options}
          placeholder='How important is a clean dog park to you?: '
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label='Fenced'
          name='fenced_pref'
          options={options}
          placeholder='How important is a fenced-in dog park to you?: '
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label='Busy'
          name='busy_pref'
          options={options}
          placeholder='How important is a busy dog park to you?: '
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label='Big'
          name='big_pref'
          options={options}
          placeholder='How important is a big dog park to you?: '
          onChange={handleChange}
        />
        <Form.Field
          control={TextArea}
          label='Notes'
          name='note'
          placeholder="Anything else you'd like to let us know?: "
        />
        <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )
}



