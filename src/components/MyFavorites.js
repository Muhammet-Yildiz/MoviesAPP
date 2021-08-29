import { useContext, useState, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";
import { apiKey } from "../api/config";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const MyFavorites = () => {

    const { myfavorites ,loading,setLoading} = useContext(MoviesContext)

    const [favoriList, setFavoriList] = useState([])




    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
            
        }, 3000);

        getMovie()


    }, [setLoading])

    const getMovie = () => {
       
        const data = []
        
        myfavorites.map(async (movieID, index) => {

            const MOVIE_API = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`

            const movieJson = await axios(MOVIE_API)

            const res = movieJson.data

            data.push(res)

            if (data.length === index + 1) {

                setFavoriList([...favoriList.concat(data)])

            }


        })


    }

  

    return (
    <>

    <div className="tit ">
    <div id="heart"></div>
        <span>
        My Favorite MovieList 

        </span>
        <div id="heart"></div>
    </div>
    
    {
        loading ? <Loader /> : 
        
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4 myFavoriList" >
            {
                favoriList.length > 0 ?
                    favoriList.map(movie=> {
                        return (
                            <Movie {...movie} key={uuidv4()}  />
                        )
                }) 
                : <h1 className="noMovie" >You don't have a favorite movie</h1>
            }
            
        </div> 

    }
     
    </>
    
    )

}

export default MyFavorites;


