import React, { useState, useEffect } from "react";

//hooks
import { useHomeFetch } from "../Hooks/useHomeFetch";
//configaration
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//image
import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  if(state.results.length>0)
  console.log(state.results);
  console.log("ste")
  console.log("ste")

  return (
    <>
    
      {
      state.results.length>0 && state.results[0].backdrop_path?(
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null
      }
    </>
  );
};

export default Home;
