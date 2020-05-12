import React, { useEffect, useState } from 'react';
import '../index.css';

export default function Flash() {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  return (
    visibility && <div className={`alert alert-${type}`}>
      <span className="close"><strong>X</strong></span>
      <p>{message}</p>
    </div>
  )
}