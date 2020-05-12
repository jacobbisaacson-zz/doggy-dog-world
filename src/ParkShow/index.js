import React, { useState } from 'react'
import { Button, Header, Image, Label, Modal } from "semantic-ui-react"
// import ParkList from '../ParkList'

export default function ParkShow({ parkToShow, closeParkModal }) {
  const [park, setPark] = useState(parkToShow)

  return(
    <Modal open={true} closeIcon={true} onClose={closeParkModal}>
      <Header>{park.name}</Header>
    </Modal>

  )
}












