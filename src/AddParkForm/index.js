import React, { useState } from 'react'
import { Form, Button, Segment, Select, Input } from 'semantic-ui-react'

const options = [
    { key: 'v', text: 'Very', value: 'very' },
    { key: 'k', text: 'Kinda', value: 'kinda' },
    { key: 'm', text: 'Meh...', value: 'meh' },
]

export default function NewParkForm({ createPark }) {
  const [park, setPark] = useState({
    name: '',
    clean: '',
    big: '',
    fenced: '',
    busy: '',
    location: ''
  })

  const handleChange = event => {
    setPark({
      ...park,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    createPark(park)
  }

  return (
    <Segment>
      <h4>Add New Park:</h4>
      <Form 
        onSubmit={handleSubmit}
        className='add-park-form'
      >
        <Form.Group
          widths='equal'>
          <Form.Field
            onSubmit={handleSubmit}
            control={Input}
            label='Name'
            placeholder="Enter Park Name: "
            onChange={handleChange}
          />
          <Form.Field
            onSubmit={handleSubmit}
            control={Input}
            label='Location'
            placeholder="Enter Park Location: "
            onChange={handleChange}
          />
          <Form.Field
            onSubmit={handleSubmit}
            control={Select}
            label='Clean'
            options={options}
            placeholder="Is this park CLEAN?: "
            onChange={handleChange}
          />
          <Form.Field
            onSubmit={handleSubmit}
            control={Select}
            label='Big'
            options={options}
            placeholder="Is this park BIG?: "
            onChange={handleChange}
          />
          <Form.Field
            onSubmit={handleSubmit}
            control={Select}
            label='Fenced'
            options={options}
            placeholder="Is this park FENCED?: "
            onChange={handleChange}
          />
          <Form.Field
            onSubmit={handleSubmit}
            control={Select}
            label='Busy'
            options={options}
            placeholder="Is this park BUSY?: "
            onChange={handleChange}
          />
        </Form.Group>
          <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </Segment>
  )
}


// NEED TO GET LOCATION IN HERE!
