import {useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import {Spinner} from "./Spinner1";
import {useGif} from '../hooks/useGif';




const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {


//   const [gif ,setgif] = useState('');
//   const [loading,setloading]= useState('false');
  

//   async function fetchdata(){
//     setloading(true);
//     console.log("API KEY:", API_KEY);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=WSEPTEFQ6kpZg2FqRq7WYsKPdVkbMtGo&tag=&rating=g`;
//     const {data} = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     console.log(imageSource)
//     setgif(imageSource);
//     setloading(false);
//  }
const{gif,loading,fetchdata} = useGif();
  useEffect( () => {
  fetchdata();
  },[])

  function clickhandler(){
  fetchdata();
  }

  return (<div className="w-1/2 h-[450px] bg-green-500 rounded-lg border border-black 
  flex flex-col items-center gap-y-5 mt-10"> 

     
    <h1 className="text-3xl underline font-bold"> A Random GIF</h1> 

    {
      loading ? (<Spinner/>) : (<img src= {gif} alt="random gif" 
  className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"/>)
    }
    
    <button onClick={clickhandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg ">
      Generate
    </button>
  </div>
  )
}
