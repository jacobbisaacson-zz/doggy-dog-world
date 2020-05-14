import React from 'react'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import '../App.css'

export default function ParkList(props) {
  console.log("THIS IS THE USER'S PARK LIST (props in ParkList)", props);
  const parks = props.parks.map(park => {

  const parkArr = [];
  // const userArr = [];

  
  const pushToParkArrClean = parkArr.push(park.clean)
  const pushToParkArrBig = parkArr.push(park.big)
  const pushToParkArrFenced = parkArr.push(park.fenced)
  const pushToParkArrBusy = parkArr.push(park.busy)

  // const pushToUserArrClean = userArr.push(props.user.clean_pref)
  // const pushToUserArrBig = userArr.push(props.user.big_pref)
  // const pushToUserArrFenced = userArr.push(props.user.fenced_pref)
  // const pushToUserArrBusy = userArr.push(props.user.busy_pref)

  console.log("parkArr", parkArr);
  // console.log("userArr", userArr);

  // will get the sum of the arrays
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  // console.log("user score sum", userArr.reduce(reducer));
  console.log("park score sum", parkArr.reduce(reducer));

  // just gettin the individual sums, 
  // then the difference between the 2 

  const parkSum = parkArr.reduce(reducer, 0)
  console.log("parkSum", parkSum);
  
  // const userSum = userArr.reduce(reducer, 0)
  // console.log("userSum", userSum);

  // const theNumber = parkSum - userSum

  // console.log(theNumber);

  // logic to render the cards (in the ParkList) a certain color

  // setPrefColor hook, bring in props
  // should be able to set pref color for each park

  // if(theNumber > 0 && theNumber < 3) {
  //   console.log("Green");
  // } else {
  //   if(theNumber > 3 && theNumber < 7) {
  //     console.log("Yellow");
  //   } else {
  //     console.log("Red");
  //   }
  // }
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


    // const theParks = [
    //   {
    //     clean: '', 
    //     big: '',
    //     fenced: '',
    //     busy: ''
    //   }
    // ]
    // const pushTheParks = theParks.map(parkId => {
    //   const container = {}

    //   container[parkId] = props.parks
    //   console.log("CONTAINER", container);
    // })
    // console.log("PUSHTHEPARKS", pushTheParks);



