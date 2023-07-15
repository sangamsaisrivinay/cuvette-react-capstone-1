import React from 'react'
import HeaderComponent from './HeaderComponent'
import './Style.css'
import { Link } from 'react-router-dom'
const LandingPage = ({moviesList}) => {

console.log( moviesList)

  return (
    <div className="browse-container">
      <HeaderComponent />

      <div
        className="movies-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          gap: "20px",
          padding: "0 5vw",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Entertainment according to your choice
        </p>

        {Object.entries(moviesList).map(([genre, movies]) => (
          <div key={genre}>
            <p
              style={{
                color: "#878787",
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: "1.4rem",
              }}
            >
              {genre}
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "10px 0",
                gap: "1vw",
                height: "30vh",
                overflow: "auto",
                marginBottom: "10px",
              }}
            >
              {movies.map((movie) => (
                <img
                  key={movie.id}
                  style={{
                    height: "100%",
                    maxWidth: "25%",
                    borderRadius: "10px",
                  }}
                  src={movie.poster_path}
                  alt="loading"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button style={{position:'sticky',top:'90%',left:'90%',border:'none',outline:'none',padding:'5px 10px', borderRadius:'10px',  backgroundColor:'green'}}>
        <Link to='/home' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
        home
        </Link>
        </button>
    </div>
  );
}

export default LandingPage