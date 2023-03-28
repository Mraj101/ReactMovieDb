import React,{useState,useEffect} from 'react'

import API from '../API'
//configaration
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"

//image
import NoImage from "../images/no_image.jpg"

const Home = () => {
    const [ state, setState ]=useState();
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    const fetchMovies=async (page,searchTerm="")=>{
      try{
        setError(false);
        setLoading(true);
        const movies=await API.fetchMovies(page,searchTerm);
        console.log(movies)

      }
      catch(error){
        setError(true)
        console.log(error.messege)
      }
    };

//initial render
    useEffect(()=>{
      fetchMovies(1)
      },[])

  return (
    <div>Home page</div>
  )
}

export default Home