import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList, setTrigger }) {
  const [movie, setMovie] = useState(null);
  //const params = useParams();
  const match = useRouteMatch();
  const { push } = useHistory();

  //console.log(setTrigger)

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const saveMovie = e => {
    e.preventDefault();
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [match.params.id]);

  const editeMovie = e => {
    e.preventDefault();
    push(`/update-movie/${movie.id}`);
  };

  const deleteMovie = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/movies/${movie.id}`)
      .then(res => {
        console.log(res);
        push("/");
        setTrigger();
      })
      .catch(err => console.log(err));
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <button className="save-button" onClick={saveMovie}>
        SAVE
      </button>
      <button className="edit-button" onClick={editMovie}>
        EDIT
      </button>
      <button className="delete-button" onClick={deleteMovie}>
        Delete
      </button>
    </div>
  );
}

export default Movie;
