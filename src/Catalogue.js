import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Catalogue() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '9b4cc661bf8622c89299a0070c561412',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1999,
      },
    }).then((res) => {
      // console.log(res)
      const movieResults = res.data.results;

      setMovies(movieResults);

      console.log(movieResults);
    })

  }, []);


  return (
    <div className="wrapper">
      <header>
        <h1>Weekend Movie</h1>
      </header>
      <ul className="catalogue">
        {
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`Poster for ${movie.original_title}`} />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>


  );
}

export default Catalogue;