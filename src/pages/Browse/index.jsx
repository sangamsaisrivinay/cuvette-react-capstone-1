import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <div className='browse-container'>
        <h1>Browse</h1>
        <div style={{ width:'100%', textAlign: 'right', padding:'0 10px 10px 0'}}>
        <button style={{background:'green',padding:' 5px 10px', border:'none', outline:'none', borderRadius:'10px'}}>
        <Link to='/home' style={{color:'white',textDecoration:'none',fontWeight:'bold'}}>Home</Link>
        </button>
        </div>
        </div>
  )
}

export default index