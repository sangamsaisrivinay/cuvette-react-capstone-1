import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faWind, faThermometerQuarter } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Weather = () => {



const  weatherData= useRef({})

useEffect(()=>{
  axios.get(`http://api.weatherapi.com/v1/current.json?key=696ca1b5afa543ab937135358231407&q=guntur&aqi=yes`)
  .then(res=>{
    weatherData.current=res.data
    // console.log(weatherData.current.current.pressure_mb)
    // console.log(weatherData)
    
  },[]
  )
})

  return (
    <div className="weather-card">
         {/* <div >
        <div style={{ textAlign: "center" }}>
          <img
            src={weatherData.current.current.condition.icon}
            alt=""
            style={{ width: "50px", objectFit: "cover" }}
          />
        </div>
        <div style={{ textAlign: "center", maxWidth:'100px', fontSize:'0.5rem' }}>
          {weatherData.current.current.condition.text}
        </div>
      </div>
      
      <div>
        <div style={{ fontSize: "2rem" }}>
          {weatherData.current.current.temp_c}°C
        </div>
        <div style={{ fontSize: "0.8rem" }}>
          <FontAwesomeIcon icon={faThermometerQuarter} />
          {weatherData.current.current.pressure_mb} mbar <br /> Pressure
        </div>
      </div>
      

      <div>
        <div style={{ fontSize: "0.6rem", paddingBottom: "5px" }}>
          <FontAwesomeIcon icon={faWind} style={{ fontSize: "1.2rem" }} />
          <br />
          {weatherData.current.current.wind_kph} km/hr
        </div>
        <div style={{ fontSize: "0.6rem" }}>
          <FontAwesomeIcon icon={faTint} style={{ fontSize: "1.2rem" }} />{" "}
          {weatherData.current.current.humidity}
          <br />
          Humidity
        </div>
      </div>    */}
      <div >
        <div style={{ textAlign: "center" }}>
          <img
            src="https://cdn.weatherapi.com/weather/64x64/night/296.png"
            alt=""
            style={{ width: "50px", objectFit: "cover" }}
          />
        </div>
        <div style={{ textAlign: "center", maxWidth:'100px', fontSize:'0.5rem' }}>
          Mist
        </div>
      </div>
      
      <div>
        <div style={{ fontSize: "2rem" }}>
          26°C
        </div>
        <div style={{ fontSize: "0.8rem" }}>
          <FontAwesomeIcon icon={faThermometerQuarter} />
          1000 mbar <br /> Pressure
        </div>
      </div>
      

      <div>
        <div style={{ fontSize: "0.6rem", paddingBottom: "5px" }}>
          <FontAwesomeIcon icon={faWind} style={{ fontSize: "1.2rem" }} />
          <br />
          5 km/hr
        </div>
        <div style={{ fontSize: "0.6rem" }}>
          <FontAwesomeIcon icon={faTint} style={{ fontSize: "1.2rem" }} />{" "}
          70
          <br />
          Humidity
        </div>
      </div>  
    </div>
  );
}

export default Weather