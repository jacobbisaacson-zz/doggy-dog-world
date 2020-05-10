import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

export default function DogList(props) {
  console.log("THIS IS THE USER'S DOG LIST (props in DogList)", props);
  const dogs = props.dogs.map(dog => {
    return(
      <Card 
        key={dog.id} 
        color={"red"}
      >
        <Card.Content textAlign={"center"}>        
          <Image 
            src={dog.image}
            size='medium'
            floated='center'
          />
            <Card.Header>
              {dog.name}
            </Card.Header>
            <Card.Meta>
              {dog.breed}
            </Card.Meta>
            <Card.Description>
              {dog.name} is a {dog.breed} who is loved by {dog.owner.username}
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

