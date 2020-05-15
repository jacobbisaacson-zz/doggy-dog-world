import React from 'react'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import '../App.css'

export default function DogList(props) {
  const dogs = props.dogs.map(dog => {
    return(
      <Card 
        key={dog.id} 
        color={"blue"}
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
              inverted color='red'
              size='small'
              floated='right'
              onClick={ () => props.deleteDog(dog.id) }
            >
              Delete {dog.name}
            </Button>
            <Button
              inverted color='blue'
              size='small'
              floated='left'
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




