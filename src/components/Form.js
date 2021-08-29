import React, { useState,useRef } from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const a = useRef(null)
  return (
    <form
      className="search-form"
      onSubmit={e => {
        handleSubmit(e, history, searchTerm)
        a.current.blur();
      } }
    >
      <input
        type="text"
        name="search"
        ref={a}
        placeholder="Search..."
        className=" m-4"
        onChange= {(e)=> setSearchTerm(e.target.value)}
        value={searchTerm}
      />
     

        <button type="submit" className={searchTerm.trim() ? 'searchBtn' : 'disBtn'}  ><i className="bi bi-search "></i> </button>
    </form>
  );
};

export default Form;
