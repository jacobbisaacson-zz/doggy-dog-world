import React, { useState } from 'react'
import { Header, Image, Modal } from "semantic-ui-react"
import '../index.css'
// import ParkList from '../ParkList'

export default function ParkShow({ parkToShow, closeParkModal }) {
  console.log(parkToShow);
  return(
    <Modal open={true} closeIcon={true} onClose={closeParkModal}>
      <Header className='park-header-style'>{parkToShow.name}</Header>
      <Header className='park-header-style'>{parkToShow.location}</Header>
      <Modal.Content image>
        <Image
          src={parkToShow.image}
          wrapped
          size='medium'
        />
        <Modal.Description>
          <Header>{parkToShow.name}'s Details:</Header>
            <small>(user rated, on a scale from 1-3)</small>
            <p className='park-show-p'>Located at {parkToShow.location}</p>
            <p className='park-show-p'>How Clean?<br></br>{parkToShow.clean}</p>
            <p className='park-show-p'>How Big?<br></br>{parkToShow.big}</p>
            <p className='park-show-p'>How Fenced-In?<br></br>{parkToShow.fenced}</p>
            <p className='park-show-p'>How Busy?<br></br>{parkToShow.clean}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}












