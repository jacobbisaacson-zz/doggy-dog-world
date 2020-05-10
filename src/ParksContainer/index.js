import React, { useState, useEffect } from 'react'
// import add park form
// import Park list
// import edit park modal

export default function ParkContainer() {
  const [parks, setParks] = useState([])
  const [idOfParkToEdit, setIdOfParkToEdit] = useState(-1)

  useEffect(() => {
    getParks()
  }, [])





  
}