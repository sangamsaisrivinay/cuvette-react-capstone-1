import React from 'react'
import './style.css'
import {Timer, Notes, News, WeatherTime, UserProfile} from './widgets'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-container">
      <UserProfile />
      <WeatherTime />
      <News />
      <Notes />
      <Timer />
      <button
        style={{
          position: "sticky",
          bottom: "0",
          left: "90%",
          width: "100px",
          padding: " 10px",
          border: "none",
          outline: "none",
          borderRadius: "15px",
          backgroundColor: "green",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        <Link to='/browse'>
        Browse
        </Link>
      </button>
    </div>
  );
}

export default Home