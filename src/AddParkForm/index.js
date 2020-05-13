import React, { useState } from 'react'
import { Form, Button, Segment, Select, Input } from 'semantic-ui-react'
import '../index.css'
// import '../styles.css'

const options = [
    { key: 'v', text: 'Very', value: 'very' },
    { key: 'k', text: 'Kinda', value: 'kinda' },
    { key: 'm', text: 'Meh...', value: 'meh...' },
]

export default function NewParkForm({ createPark }) {
  const [park, setPark] = useState({
    name: '',
    clean: '',
    big: '',
    fenced: '',
    busy: '',
    image: '',
    location: ''
  })

  const handleChange = event => {
    console.log(event.target.value);
    console.log(event.target);
    setPark({
      ...park,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(park);
    createPark(park)
  }

  return (
    <Segment>
      <h4>Add New Park:</h4>
      <Form 
        onSubmit={handleSubmit}
        className="this-form"
      >
        <Form.Field
          onSubmit={handleSubmit}
          control={Input}
          label='Name'
          name='name'
          placeholder="Enter Park Name: "
          onChange={handleChange}
        />
        <Form.Field
          onSubmit={handleSubmit}
          control={Input}
          label='Location'
          name='location'
          placeholder="Enter Park Location: "
          onChange={handleChange}
        />
        <Form.Field
          onSubmit={handleSubmit}
          control={Select}
          label='Clean'
          name='clean'
          options={options}
          placeholder="Is this park CLEAN?: "
          onChange={handleChange}
        />
        <Form.Field
          onSubmit={handleSubmit}
          control={Select}
          label='Big'
          name='big'
          options={options}
          placeholder="Is this park BIG?: "
          onChange={handleChange}
        />
        <Form.Field
          onSubmit={handleSubmit}
          control={Select}
          label='Fenced'
          name='fenced'
          options={options}
          placeholder="Is this park FENCED?: "
          onChange={handleChange}
        />
        <Form.Field
          onSubmit={handleSubmit}
          control={Select}
          label='Busy'
          name='busy'
          options={options}
          placeholder="Is this park BUSY?: "
          onChange={handleChange}
        />
        <Form.Field
          onSubmit={handleSubmit}
          control={Input}
          label='Image'
          name='image'
          placeholder="Paste Park's image URL here: "
          onChange={handleChange}
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </Segment>
  )
}


