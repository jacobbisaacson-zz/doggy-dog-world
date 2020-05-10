import React, { useState } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default function AddDogForm({createDog}) {
  const [dog, setDog] = useState({
    name: '',
    breed: '',
    image: ''
  })

  const handleChange = event => {
    setDog({
      ...dog,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    createDog(dog)
  }

  return (
    <Segment>
      <h4>Add new dog:</h4>
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Form.Input 
          type="text"
          name="name"
          value={dog.name}
          placeholder="Enter a name"
          onChange={handleChange}  
        />
        <Label>Breed:</Label>
        <Form.Input 
          type="text"
          name="breed"
          value={dog.breed}  
          placeholder="Enter a breed"
          onChange={handleChange}
        />
        <Label>Picture:</Label>
        <Form.Input 
          type="text"
          name="image"
          value={dog.image}  
          placeholder="Paste image URL here: "
          onChange={handleChange}
        />
        <Button type="Submit">Create Dog</Button>
      </Form>
    </Segment>
  )
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
