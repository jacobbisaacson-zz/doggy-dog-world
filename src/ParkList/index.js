import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function ParkList(props) {
  console.log("THIS IS THE USER'S PARK LIST (props in ParkList)", props);
  const parks = props.parks.map(park => {
    return(
      <Card 
        key={park.id} 
        color={"red"}
      >
        <Card.Content textAlign={"center"}>
            <Card.Header>
              {park.name}
            </Card.Header>
            <Card.Description>
              Located at: {park.location} || 
              Posted by: {park.owner.username}
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign={"center"}> 
            <Button 
              basic 
              color='red'
              onClick={ () => props.deletePark(park.id) }
            >
              Delete {park.name}
            </Button>
            <Button 
              basic 
              color='green'
              onClick={ () => props.editPark(park.id) }
            >
              Edit {park.name}
            </Button>
        </Card.Content>
      </Card>     
    )
  })

  return (
    <React.Fragment>
      <h3> Dog Park List </h3>
      <Card.Group centered={true}>
        {parks}
      </Card.Group>
    </React.Fragment>
  )
}




