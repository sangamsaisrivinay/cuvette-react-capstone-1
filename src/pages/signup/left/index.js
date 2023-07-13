import React from 'react'
import './style.css'
import Banner from './images/banner.png'
const index = () => {
  return (
    <div className='banner-container'>
      <img src={Banner} alt='loading banner'/>
      <div className='text-overlay'>
        <h2>Discover new things with super app</h2>
      </div>
    </div>
  )
}

export default index