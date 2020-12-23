import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Movie(props) {

    const [movie, setmovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);

        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=673d15ba1eac409ccc084060570c8597&revenue&append_to_response=credits`;

        axios.get(url)
            .then(res => {
                setmovie(res.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="container mt-5 jumbotron">
            <div className="card">
                <img src={'https://image.tmdb.org/t/p/original/' + movie?.backdrop_path} alt={movie?.original_title} className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">{movie?.original_title}</h4>
                    <p className="card-text">{movie?.overview}</p>
                    <p className="card-text"><small className="text-muted">Released On : {movie?.release_date}</small></p>
                    <h5 className="card-title">Movie Cast</h5>
                    <div className="row">

                        {
                            movie?.credits.cast?.map(cast => (
                                <div className="col-md-4">
                                    <div className="card mb-2">
                                        <img src={'https://image.tmdb.org/t/p/original/' + cast?.profile_path} alt={cast?.name} className="card-img-top " />
                                        <div className="card-body">
                                            <h5 className="card-title">{cast?.name}</h5>
                                            <p className="card-text"><strong>As:</strong> {cast?.character}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie
