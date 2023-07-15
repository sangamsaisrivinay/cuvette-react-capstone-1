import axios from "axios";
import genres from "./genres";
import { useEffect, useRef } from "react";
import LandingPage from "./LandingPage";

const FetchData = () => {
  const movies = useRef([]);
  const moviesByGenre = useRef([]);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?with_genres=action%2Cromance%2Cdrama%2Cmusic%2Cadventure',
    headers: {
      accept: 'application/json',
      Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWM2YzgzYmUzMmQ0YjMxMTNjMzk0OTE3ZDRmMDRmNSIsInN1YiI6IjY0YjI4MjA4MjNkMjc4MDBlODhhZThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.89jmNv7fEMG4IwDN6lZpvXSZdmprMmoFRayXrnwqPHA'
    },
  };

  useEffect(() => {
    let cancelRequest = false;

    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        if (!cancelRequest) {
          movies.current.push(...response.data.results);
          moviesByGenre.current = Object.entries(genres).reduce((acc, [genreId, genreName]) => {
            acc[genreName] = movies.current.filter(movie => movie.genre_ids.includes(Number(genreId)));
            return acc;
          }, {});
          // console.log(moviesByGenre.current);
          console.log('fetched movies');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      cancelRequest = true;
    };
  }, []);

  return (
    <div>
      <LandingPage moviesList={moviesByGenre.current}/>
    </div>
  );
};

export default FetchData;
