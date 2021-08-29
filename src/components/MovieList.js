import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";
import NoMovies from "./NoMovies";

const MovieList = ({ searchTerm }) => {
  
  const { movies, loading,searchMovies } = useContext(MoviesContext);

  useEffect(() => {
    
    searchMovies(searchTerm);

  }, [searchTerm,searchMovies]);

  return (
    <>

      {loading ? <Loader /> :

        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >

          {
          
            movies.length ?

              movies.map((movie) => {
                return (
                  <Movie {...movie} key={movie.id}  />
                )
              })

            : <NoMovies />

          }

        </div>

      }

    </>

  );
};

export default MovieList;
