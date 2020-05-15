import React from 'react'
import { Card, Button, Header } from 'semantic-ui-react'

export default function UserList(props) {
  console.log("THIS IS THE USER LIST (props in USERLIST)", props);
  const users = props.users.map(user => {
    console.log("user", user);
    return(
      <Card 
        key={user.id} 
        color={"blue"}
      >
        <Card.Content textAlign={"center"}>
          <Header>
            {user.name}'s Profile
          </Header>
          <Card.Description>
            Cleanliness Preference: {user.clean_pref}
            <br/>
            Size Preference: {user.big_pref}
            <br/>
            Fenced-In Preference: {user.fenced_pref}
            <br/>
            Business Preference: {user.busy_pref}
            <br/>
            Additional Notes: {user.note}
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





