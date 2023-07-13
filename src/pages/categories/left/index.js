import React from 'react'
import './style.css'
import Chips from './Chips'
const index = () => {
  return (
    <div className='categories-left-container'>
        <h1 id='header'>Super app</h1>
        <h1 id='caption'>Choose your entertainment category</h1>
        <Chips/>
    </div>
  )
}

export default index