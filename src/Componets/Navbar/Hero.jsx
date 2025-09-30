import React, { useEffect,useState } from 'react'
import {API_Key} from '../../Constants/Constant'
import { ImgUrl } from '../../Constants/Constant'
import Tmdb from '../../Axios/Tmdb'

const Hero = () => {
  const[movies,setMovies]=useState([])
  const[Banner,setBanner]=useState([])
  useEffect(()=>{
     Tmdb.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_Key}&language=en-US`).then((res)=>{
            const results=res.data.results;
          setMovies(results)
            const randomindex=Math.floor(Math.random()*results.length)
  setBanner(results[randomindex])
            
     }
     
      
     )
     
  },[])

  return (
    
     <div className=" text-white mt-[55px] lg:p-10 p-3 h-[350px] md:h-[450px]"style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(37,37,37,0.5)95%,#111),url(${Banner?ImgUrl+Banner.backdrop_path:""}`}}>
      <div>
      <h1 className='text-4xl font-bold mb-4'>{Banner? Banner.title:""}</h1>
      <p className='text-lg max-w-2xl'>{Banner? Banner.overview:""}</p> 
      </div> 
     
    </div>
  )
}

export default Hero
// <div className='w-screen bg-[#181818] text-white mt-[55px] lg:p-10 p-3 '>
      {/* 
      Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p> */}
      // 