import { MOVIES_API } from "../api/config";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { MoviesContext } from "../context/MoviesContext";

import Movie from "./Movie";
import Loader from "./Loader";
import { v4 as uuidv4 } from 'uuid';



const Home = () => {
  const { loading, setLoading } = useContext(MoviesContext)
  const [allMovies, setAllMovies] = useState([])

  useEffect(() => {

    getMovies(MOVIES_API)

  },[]);

const getMovies = async () => {

    const numberList =  Array(10).fill(2).map((v,i)=>i+2);
    const bigData =[]

    numberList.map( async (num) => {

        const moviesJson = await axios(MOVIES_API+num);
        const res = moviesJson.data.results;

        res.forEach((json) => {

          bigData.push(json)

          if(bigData.length === 200 ) {
            setAllMovies(bigData)
          }

        })

    })  

    setTimeout(()=> {

        setLoading(false);

    },3000)



}

  return (
    <div className="  movieList  container d-flex flex-wrap justify-content-center  mt-4">
      {
        loading ? <Loader/>  : allMovies.map((movie) => {
          return (
            <Movie {...movie} key={uuidv4()} />
          )
        }

        )  
      }

    
    </div>
  );
}

export default Home;