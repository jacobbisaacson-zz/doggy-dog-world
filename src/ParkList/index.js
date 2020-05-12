import React from 'react'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import '../App.css'

export default function ParkList(props) {
  console.log("THIS IS THE USER'S PARK LIST (props in ParkList)", props);
  const parks = props.parks.map(park => {
    return(
      <Card 
        key={park.id} 
        color={"black"}
      >
        <Card.Content textAlign={"center"}>
        <Header>
          {park.name}
        </Header>
          <Image 
            src={park.image}
            size='medium'
            floated='left'
          />
            <Card.Meta>
              Location: {park.location}
            </Card.Meta>
            <Card.Meta>
              Posted by: {park.owner.username}
            </Card.Meta>
          </Card.Content>
          <Card.Content 
            textAlign={"center"}
          >
            <Button 
              inverted color='red'
              size='small'
              onClick={ () => props.deletePark(park.id) }
            >
              Delete
            </Button>
            <Button 
              inverted color='blue'
              size='small'
              onClick={ () => props.editPark(park.id) }
            >
              Edit
            </Button>
            <div>
              <Button 
                inverted color='green'
                size='medium'
                onClick={ () => props.showPark(park.id) }
              >
                See {park.name}
              </Button>
            </div>
        </Card.Content>
      </Card>     
    )
  })

  return (
    <React.Fragment>
      <Card.Group 
        centered={true}
      >
        {parks}
      </Card.Group>
    </React.Fragment>
  )
}




