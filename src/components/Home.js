import React, { useState, useEffect } from "react";


//hooks
import { useHomeFetch } from "../Hooks/useHomeFetch";
//configaration
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const {state,loading,error}=useHomeFetch();
  
  console.log(state)
  return <div>Home page</div>;
};

export default Home;
