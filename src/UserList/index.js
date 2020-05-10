import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function UserList(props) {
  console.log("THIS IS THE USER LIST (props in USERLIST)", props);
  const users = props.users.map(user => {
    return(
      <Card 
        key={user.id} 
        color={"blue"}
      >
        <Card.Content textAlign={"center"}>        
          <Card.Header>
            {user.username}
          </Card.Header>
        </Card.Content>
          <Card.Content textAlign={"center"}> 
            <Button 
              basic 
              color='red'
              onClick={ () => props.deleteUser(user.id) }
            >
              Delete {user.username}
            </Button>
            <Button 
              basic 
              color='green'
              onClick={ () => props.editUser(user.id) }
            >
              Edit {user.username}
            </Button>
        </Card.Content>
      </Card>
    )
  })

  return (
    <Card.Group centered={true}>
      {users}
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

