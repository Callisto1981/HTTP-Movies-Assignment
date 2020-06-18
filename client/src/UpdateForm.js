import React, { useState, useEffect } from "react";
import axios from "axios";

export const UpdateForm = () => {
  const [movieEdit, setMovieEdit] = useState({
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  useEffect(() => {});
  handleChange = () => {};
  return (
    <>
      <div>
        <form>
          <input type="text" onChange={handleChange} value={e.target.value} />
          <button>SUBMIT</button>
        </form>
      </div>
    </>
  );
};
