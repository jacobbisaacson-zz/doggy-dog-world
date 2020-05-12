import React, { useState } from 'react'
import { Button, Header, Image, Label, Modal } from "semantic-ui-react"
// import ParkList from '../ParkList'

export default function ParkShow({ parkToShow, closeModal }) {
  const [park, setPark] = useState(parkToShow)

  return(

      <Header>
        <h3>Park Show Page</h3>
      </Header>

  )
}












