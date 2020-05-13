import React from 'react'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import '../App.css'

export default function ParkList(props) {
  console.log("THIS IS THE USER'S PARK LIST (props in ParkList)", props);
  const parks = props.parks.map(park => {

  const parkArr = [2, 3, 3, 3];
  const userArr = [2, 1, 1, 2];

  // will get the sum of the arrays
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  // console.log("user score sum", userArr.reduce(reducer));
  // console.log("park score sum", parkArr.reduce(reducer));

  // just gettin the individual sums, 
  // then the difference between the 2 
  const parkSum = parkArr.reduce(reducer)
  const userSum = userArr.reduce(reducer)

  const theNumber = parkSum - userSum

  // console.log(theNumber);

  // logic to render the cards (in the ParkList) a certain color
  if(theNumber > 0 && theNumber < 3) {
    console.log("Green");
  } else {
    if(theNumber > 3 && theNumber < 7) {
      console.log("Yellow");
    } else {
      console.log("Red");
    }
  }
    return(
      <Card 
        key={park.id} 
        color={"pink"}
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




