import React, { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  id: "",
  title: "",
  director: "",
  metascore: "",
  stars: []
};

export const UpdateForm = props => {
  //use route match

  const { push } = useHistory();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        //console.log(res.data)
        setMovieEdit(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  handleChange = e => {
    setMovieEdit({ ...movieEdit, [e.target.name]: e.target.value });
  };

  handleSumbit = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/api/movies/${props.match.params.id}`,
        movieEdit
      )
      .then(res => {
        //console.log(res)
        setMovieEdit({
          id: "",
          title: "",
          directore: "",
          metascore: "",
          stars: []
        });
        props.setSavedList([...props.savedList, res]);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <h1>Edit Movie Info</h1>
        <form onSubmit={handleSumbit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            value={movieEdit.title}
          />
          <label htmlFor="metascore"> Metascore</label>
          <input
            id="metascore"
            name="starts"
            type="text"
            onChange={handleSumbit}
            value={movieEdit.metascore}
          />
          <label htmlFor="stars">Stars</label>
          <input
            id="stars"
            type="text"
            name="stars"
            placeholder="Enter Stars"
            onChange={handleChange}
            value={movieEdit.stars}
          />
          <button>SUBMIT</button>
        </form>
      </div>
    </>
  );
};
