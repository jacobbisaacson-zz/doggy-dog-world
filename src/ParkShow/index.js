import React, { useState } from 'react'
import { Header, Image, Modal } from "semantic-ui-react"
import '../index.css'
// import ParkList from '../ParkList'

export default function ParkShow({ parkToShow, closeParkModal }) {
  console.log(parkToShow);
  return(
    <Modal
      open={true} 
      closeIcon={true} 
      onClose={closeParkModal}>
      <Header 
        style={{ color: 'skyBlue', fontSize: 26, fontWeight: 'bold' }}
        className='park-header-style'>{parkToShow.name}</Header>
      <Header
        style={{ color: 'skyBlue', fontSize: 22, fontWeight: 'bold' }}
        className='park-header-style'>{parkToShow.location}</Header>
      <Modal.Content image>
        <Image
          src={parkToShow.image}
          wrapped
          size='medium'
        />
        <Modal.Description>
          <Header
            style={{ color: 'skyBlue', fontSize: 24, fontWeight: 'bold' }}>{parkToShow.name}'s Details:</Header>
            <div>
              <h6
                style={{ color: 'black', fontSize: 15, fontWeight: 'bold', margin: 0 }}>* User rated on a scale from 1-3</h6>
              <h4
                style={{ color: 'skyBlue', fontSize: 20, fontWeight: 'bold' }}>Posted By: {parkToShow.owner.username}</h4>
            </div>
            <p style={{ fontSize: 18 }} className='park-show-p'>How Clean?<br></br>{parkToShow.clean}</p>
            <p style={{ fontSize: 18 }} className='park-show-p'>How Big?<br></br>{parkToShow.big}</p>
            <p style={{ fontSize: 18 }} className='park-show-p'>How Fenced-In?<br></br>{parkToShow.fenced}</p>
            <p style={{ fontSize: 18 }} className='park-show-p'>How Busy?<br></br>{parkToShow.clean}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}












