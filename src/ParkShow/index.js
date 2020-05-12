import React, { useState } from 'react'
import { Header, Image, Modal } from "semantic-ui-react"
import '../index.css'

// import ParkList from '../ParkList'

export default function ParkShow({ parkToShow, closeParkModal }) {
  const [park] = useState(parkToShow)

  return(
    <Modal open={true} closeIcon={true} onClose={closeParkModal}>
      <Header className='park-header-style'>{park.name}</Header>
      <Header>{park.location}</Header>
      <Modal.Content image>
        <Image
          src={park.image}
          wrapped
          size='medium'
        />
        <Modal.Description>
          <Header>{park.name}'s Details:</Header>
            <small>(as rated by user, on a scale from 1-3)</small>
            <p className='park-show-p'>Located at {park.location}</p>
            <p className='park-show-p'>How Clean?<br></br>{park.clean}</p>
            <p className='park-show-p'>How Big?<br></br>{park.big}</p>
            <p className='park-show-p'>How Fenced-In?<br></br>{park.fenced}</p>
            <p className='park-show-p'>How Busy?<br></br>{park.clean}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}












