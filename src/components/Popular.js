import { FEATURED_API } from "../api/config";

import React, {  useContext ,useEffect} from "react";
import axios from "axios";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";

const  Popular =() =>  {

    const {movies,setMovies , loading , setLoading } = useContext(MoviesContext)
    
    useEffect(() => {
        
        getMovies(FEATURED_API)

      
    });

    const getMovies = async (API) => {

        const moviesJson = await axios(API);

        setMovies(moviesJson.data.results)
      
        setTimeout(()=> {

          setLoading(false);

        },3000)
    }

    return (
        <>

        {
  
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
  
          {
              loading ? <Loader/> : 
           movies.map((movie) => {
            return (
              <Movie {...movie} key ={movie.id} />
            )
            } 
            
            )
          
          }
  
        </div>
        
        }
        </>
            
    )
}


export default Popular ; 