import React from 'react'
import './style.css'
// import ChipsData from './ChipsData'
import Right from '../right'
import Chips from './Chips'
const index = () => {
  return (
    <div className='categories-left-container'>
        <h1 id='header'>Super app</h1>
        <h1 id='caption'>Choose your entertainment category</h1>
        {/* <ChipsData/> */}
        {/* <Right/> */}
        <Chips/>
    </div>
  )
}

export default index