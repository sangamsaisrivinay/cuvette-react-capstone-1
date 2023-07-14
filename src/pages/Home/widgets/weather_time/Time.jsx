import React from 'react'
import { useState, useEffect } from 'react';
const Time = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      // console.log('time updated')
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const date= new Date()
  // const time= date.toLocaleTimeString('en-US',{timeStyle:'short'})
  // const day= date.toLocaleDateString()

  return (
    <div className='time-card'>
      <div>{time.toLocaleDateString()}</div>
      <div>{time.toLocaleTimeString('en-US',{timeStyle:'short'})}</div>
    </div>
  )
}

export default Time