import React, { useEffect } from 'react'
import axios from 'axios'
const MovieFetch = () => {

useEffect(()=>{

    //const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie?with_genres=action%2Cromance%2Cdrama%2Cmusic%2Cadventure',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWM2YzgzYmUzMmQ0YjMxMTNjMzk0OTE3ZDRmMDRmNSIsInN1YiI6IjY0YjI4MjA4MjNkMjc4MDBlODhhZThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.89jmNv7fEMG4IwDN6lZpvXSZdmprMmoFRayXrnwqPHA'
      }
    };
    
    axios
      .get(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
})

  return (
    <div>MovieFetch</div>
  )
}

export default MovieFetch