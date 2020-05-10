import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewDogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      breed: '',
      image: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.createDog(this.state)
    this.setState({
      name: '',
      breed: '',
      image: ''
      // owner: ''
    })
  }

  render() {
    return (
      <Segment>
        <h4>Add new dog:</h4>
        <Form onSubmit={this.handleSubmit} >
          <Label>Name:</Label>
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
          <Label>Picture:</Label>
          <Form.Input 
            type="text"
            name="image"
            value={this.state.image}  
            placeholder="Paste image URL here: "
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Dog</Button>
        </Form>
      </Segment>
    )
  }
}





////////here!!!!!!!!!!!






// import React, { useState } from 'react'
// import { Form, Button, Label, Segment } from 'semantic-ui-react'
// import '../index.css'

// export default function AddDogForm(props) {
//   const [addDogInfo, setAddDogInfo] = useState({
//     name: '',
//     breed: ''
//     // img:
//   })

//   // const handleChange = (event) => {
//   //   setAddDogInfo({
//   //     ...addDogInfo,
//   //     [event.target.name]: event.target.value
//   //   })
//   // }

//   // const handleSubmit = (event) => {
//   //   event.preventDefault()
//   // }


//     // setAddDogInfo({


// //   handleSubmit = (event) => {
// //     event.preventDefault()
// //     this.props.createDog(this.state)
// //     this.setState({
// //       name: '',
// //       breed: ''
// //       // img:
// //     })

//   return (
//     <Segment>
//       <h4>Add your dog!</h4>
//       <Form>
//         <Label>Name:</Label>
//         <Form.Input 
//           type="text"
//           name="name"
//           value={setAddDogInfo.name}
//           placeholder="Enter a name"
//           onChange={handleChange}  
//         />
//         <Label>Breed:</Label>
//         <Form.Input 
//           type="text"
//           name="breed"
//           value={setAddDogInfo.breed}  
//           placeholder="Enter a breed"
//           onChange={handleChange}
//         />
//         <Button type="Submit">Add Dog</Button>
//       </Form>
//     </Segment>
//   )
// }


/////edns here!!!!!!!!
