import React from 'react'
import './style.css'
import {Timer, Notes, News, WeatherTime, UserProfile} from './widgets'
const Home = () => {
  return (
    <div className='home-container'>
      <UserProfile />
      <WeatherTime />
      <News />
      <Notes />
      <Timer />
    </div>
  )
}

export default Home