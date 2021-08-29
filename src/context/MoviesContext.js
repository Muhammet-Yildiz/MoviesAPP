import React, {  useState,useEffect } from "react";
import axios from "axios";
import { SEARCH_API } from "../api/config";

export const   MoviesContext = React.createContext()  ;


const MoviesContextProvider = props => {

  const [movies ,setMovies ] = useState([]) 

  const [myfavorites ,setMyfavorites] =useState([])

  const [loading, setLoading] = useState(true);




  useEffect(() => {
    const FavoriList = getMoviesFromStorage() ; 

    setMyfavorites(FavoriList)

  }, [])




  const searchMovies = async (searchTerm) => {

        
    const searchRes =  await axios(SEARCH_API + searchTerm)

    setMovies(searchRes.data.results)

    setLoading(false);

  }






const getMoviesFromStorage = () => {

   
     if ( localStorage.getItem("myFavoriList") ) {

        let FavoriList = JSON.parse(localStorage.getItem("myFavoriList"))
        
        return FavoriList

     }
     else {

        let FavoriList = []
        return FavoriList
      
     }

 }

  return (
    <MoviesContext.Provider value={{ movies, loading, searchMovies , setMovies, setLoading , setMyfavorites ,myfavorites,getMoviesFromStorage }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
