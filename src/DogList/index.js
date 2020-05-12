import React from 'react'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import '../App.css'

export default function DogList(props) {
  console.log("THIS IS THE USER'S DOG LIST (props in DogList)", props);
  const dogs = props.dogs.map(dog => {
    return(
      <Card 
        key={dog.id} 
        color={"black"}
      >
        <Card.Content textAlign={"center"}>
        <Header>
          {dog.name}
        </Header>        
          <Image 
            src={dog.image}
            size='medium'
            floated='left'
          />
            <Card.Meta>
              {dog.breed}
            </Card.Meta>
            <Card.Description>
              Name: {dog.name}
              <br/>
              Breed: {dog.breed}
              <br/>
              Loved by: {dog.owner.username}
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign={"center"}> 
            <Button 
              basic 
              color='red'
              onClick={ () => props.deleteDog(dog.id) }
            >
              Delete {dog.name}
            </Button>
            <Button 
              basic 
              color='green'
              onClick={ () => props.editDog(dog.id) }
            >
              Edit {dog.name}
            </Button>
        </Card.Content>
      </Card>
    )
  })

  return (
    <Card.Group centered={true}>
      {dogs}
    </Card.Group>
  )
}



















////HERE!!!!!!!!!!!!!

// import React from 'react'
// // import { Card, Button } from 'semantic-ui-react'

// export default function DogList(props) {
//   console.log("THIS IS THE USER'S DOG LIST (props in DogList)", props);

//   return(
//     <h4>Dog List (user's)</h4>
//   )
// }


/////EDN HERE!!!!!!!

