import React from 'react'
import './style.css'
import Weather from './weather_time/Weather'
import Time from './weather_time/Time'
const WeatherTime = () => {
  return <div className='card weather-time-card'>
    <Time/>
    <Weather/>
  </div>;
}

export default WeatherTime