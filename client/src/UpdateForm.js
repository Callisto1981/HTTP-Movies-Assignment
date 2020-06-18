import React from "react";

export const UpdateForm = () => {
  const [movieEdit, setMovieEdit] = useState({
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
  });
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
