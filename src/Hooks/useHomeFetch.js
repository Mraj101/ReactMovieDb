import { useState,useEffect,useRef } from "react";

//API
import API from "../API";
const initialState={
    page:0,
    total_results:0,
    total_pages:0,
    results:[],
}

export const useHomeFetch=()=>{
    const [searchTerm,setSearchTerm]=useState('')
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMora,setIsLoadingMore]=useState(false)

    const fetchMovies = async (page, searchTerm = "") => {
      try {
        setError(false);
        setLoading(true);
        const movies = await API.fetchMovies(searchTerm, page);
        setState((prev)=>({
          ...movies,
          results:page>1?[...prev.results,...movies.results]:[...movies.results],
        })); // Set state with movie data
      } catch (error) {
        setError(true);
    
      }
      setLoading(false)
    };
    
    //initial and search
    useEffect(() => {
      setState(initialState)
      fetchMovies(1,searchTerm);
    }, [searchTerm]);

    useEffect(()=>{
      if(!isLoadingMora)
        return
      
      fetchMovies(state.page+1,searchTerm);
      setIsLoadingMore(false)
    },[isLoadingMora,searchTerm,state.page])
    return {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore}
}

