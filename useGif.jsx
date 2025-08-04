import React from 'react'
import {useState } from "react";
import axios from 'axios';
import { useEffect } from "react"
// import usegif from './usegif'; 


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
// const  randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=WSEPTEFQ6kpZg2FqRq7WYsKPdVkbMtGo&tag=&rating=g`;
// const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=WSEPTEFQ6kpZg2FqRq7WYsKPdVkbMtGo&tag=&rating=g`;


export const useGif = (tag) => {
const  randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=WSEPTEFQ6kpZg2FqRq7WYsKPdVkbMtGo&tag=&rating=g`;
const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=WSEPTEFQ6kpZg2FqRq7WYsKPdVkbMtGo&tag=&rating=g`;

  
  const [gif ,setgif] = useState('');
  const [loading,setloading]= useState('false');
  

  async function fetchdata(){
    setloading(true);
    console.log("API KEY:", API_KEY);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=WSEPTEFQ6kpZg2FqRq7WYsKPdVkbMtGo&tag=&rating=g`;
    const {data} = await axios.get(tag ? tagMemeurl : randomMemeurl);
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource)
    setgif(imageSource);
    setloading(false);
 }

  useEffect( () => {
  fetchdata();
  },[])

  return{gif,loading,fetchdata}

  
}
