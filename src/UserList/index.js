import React from 'react'
import { Card, Button, Header } from 'semantic-ui-react'

export default function UserList(props) {
  // console.log("THIS IS THE USER LIST (props in USERLIST)", props);
  const users = props.users.map(user => {
    // console.log("user in UserList", user);
    return(
      <Card 
        key={user.id} 
        color={"blue"}
      >
        <Card.Content
          style={{ fontSize: 14, fontWeight: 'bold' }}
          textAlign={"center"}>
          <Header
            style={{ color: 'skyBlue', fontSize: 20, fontWeight: 'bold' }}>
            {user.name}'s Profile
          </Header>
          <Card.Description
            textAlign={"left"}>
            Cleanliness Preference: {user.clean_pref}
            <br/>
            Size Preference: {user.big_pref}
            <br/>
            Fenced-In Preference: {user.fenced_pref}
            <br/>
            Busyness Preference: {user.busy_pref}
            <br/>
            Additional Notes: {user.note}
          </Card.Description>
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





