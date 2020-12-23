import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Movies.css'

function Movies() {

    const [movies, setmovies] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=673d15ba1eac409ccc084060570c8597')
            .then(
                res => {
                    setmovies(res.data.results);
                }
            )
            .catch(err => console.log(err));
    }, [])

    return (

        <div className="movies-container" >
            <h3 className="p-3 text-center">Trending Movies</h3>
            <div className="row">
                {
                    movies?.map(movie => (

                        <div className="col-md-4" key={movie.original_title}>
                            <div className="card bg-dark text-white mb-3">
                                <Link to={`/movie/${movie.id}`} className="text-white">
                                    <img src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path} alt={movie.original_title} className="card-img" />
                                    <div className="card-img-overlay">
                                        <h4 className="card-title">{movie.original_title}</h4>
                                        <p className="card-text">{movie.overview.substring(1, 200)}...</p>
                                        <p className="card-text">Released On : {movie.release_date}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies
