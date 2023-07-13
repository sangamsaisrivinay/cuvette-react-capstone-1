import React from 'react'
import './style.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Trail from './Trail'
const index = () => {
  return (
    <div className='form-container'>
      <Header/>
      <Main/>
      <Footer/>
      {/* <Trail/> */}
    </div>
  )
}

export default index