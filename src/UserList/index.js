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
            name: {user.name}
          </Card.Header>
          <Card.Description>
          clean_pref: {user.clean_pref}
          big_pref: {user.big_pref}
          fenced_pref: {user.fenced_pref}
          busy_pref: {user.busy_pref}
          note: {user.note}
          </Card.Description>
        </Card.Content>
          <Card.Content textAlign={"center"}> 
            <Button 
              basic 
              color='red'
              onClick={ () => props.deleteUser(user.id) }
            >
              Delete
            </Button>
            <Button 
              basic 
              color='green'
              onClick={ () => props.editUser(user.id) }
            >
              Edit
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

