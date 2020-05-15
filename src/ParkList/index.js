import React from 'react'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import '../App.css'

export default function ParkList(props) {
  // console.log("THIS IS THE USER'S PARK LIST (props in ParkList)", props);
  // console.log("USER PREFS IN PARK LIST", props.userPrefs);
  const userArr = [];

  if(props.userPrefs[0]) {
    const pushToUserArrClean = userArr.push(props.userPrefs[0].clean_pref)
    const pushToUserArrBig = userArr.push(props.userPrefs[0].big_pref)
    const pushToUserArrFenced = userArr.push(props.userPrefs[0].fenced_pref)
    const pushToUserArrBusy = userArr.push(props.userPrefs[0].busy_pref)
  }

  const parks = props.parks.map(park => {

  const parkArr = [];

    const pushToParkArrClean = parkArr.push(park.clean)
    const pushToParkArrBig = parkArr.push(park.big)
    const pushToParkArrFenced = parkArr.push(park.fenced)
    const pushToParkArrBusy = parkArr.push(park.busy)

    const reducer = (accumulator, currentValue) => accumulator + currentValue
    // console.log("user score sum", userArr.reduce(reducer));
    // console.log("park score sum", parkArr.reduce(reducer));

    const parkSum = parkArr.reduce(reducer, 0)
    // console.log("parkSum", parkSum);

    const userSum = userArr.reduce(reducer, 0)
    // console.log("userSum", userSum);

    const theNumber = parkSum - userSum
    // console.log(theNumber);

    let cardColor = null

    if(theNumber >= 0 && theNumber < 3) {
      cardColor = 'green'
    } else {
      if(theNumber > 3 && theNumber < 7) {
        cardColor = 'yellow'
      } else {
        cardColor = 'red'
      }
    }

    return(
      <Card
        fluid
        key={park.id} 
        color={cardColor}
        style={{ 
          fontSize: 20, 
          fontWeight: 'bold', 
          padding: 10
        }}
      >
        <Card.Content textAlign={"center"}>
        <Header style={{ backgroundColor: cardColor }}>
          {park.name}
        </Header>
          <Image 
            src={park.image}
            size='medium'
            floated='left'
          />
            <Card.Meta 
              style={{ 
                fontSize: 20, 
                fontWeight: 'bold', 
                padding: 10
              }}> Location: 
              <br/>
              {park.location}
            </Card.Meta>
              <br/>
            <Card.Meta>
              Posted by:
              <br/>
              {park.owner.username}
            </Card.Meta>
            <Card.Description
              style={{ 
                fontSize: 20, 
                fontWeight: 'bold', 
                padding: 10,
                backgroundColor: cardColor
              }}> {park.name} is a {cardColor} light for you and your pup!
            </Card.Description>
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
                {park.name} Details
              </Button>
            </div>
        </Card.Content>
      </Card>     
    )
  }) // end of map

  return (
    <React.Fragment>
      <Card.Group centered={true} >
        {parks}
      </Card.Group>
    </React.Fragment>
  )
}



