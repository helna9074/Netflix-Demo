
import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState,useEffect } from "react"
import Tmdb from '../../Axios/Tmdb'
import Youtube from '../../Axios/Youtube'
import {ImgUrl,API_Key,youtube_Api} from "../../Constants/Constant"
import YouTube from 'react-youtube'
import { UserAuth } from '../../Context/AuthContext';
import {db} from '../../firebase'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore';
const Card = (props) => {
  const[like,setLike]=useState(false)
    const[movies,setMovies]=useState([])
    const[url,setUrl]=useState('')
    const {user}=UserAuth();
    const [saved,setSaved]=useState(false)
    const MovieId=doc(db,'user',`${user?.email}`)
    const savedHandler=async(movie)=>{
       if(user?.email){
       setLike(!like)
       setSaved(!saved)
        await updateDoc(MovieId,{
          savedShows:arrayUnion({
            id:movie.id,
            title:movie.title||movie.name,
            image:movie.backdrop_path

          })
        })
       }else{
        alert('please Login to save movies')
       }
    }
    useEffect(()=>{
       Tmdb.get(props.url).then((res)=>{
         setMovies(res.data.results)
        
       
    })
        
       
    },[])
  
    const moviehandler=({id,name,title})=>{
         Tmdb.get(`movie/${id}/videos?&api_key=${API_Key}&language=en-US`).then((res)=>{
            if(res.data.results.length!==0){
         setUrl(res.data.results[0])
            }else{
                 YoutubeHandler(id,name,title)
                  }
                })
                .catch((err)=>
        console.log("Tmdb Error",err))
               YoutubeHandler(id,name,title)
             
        }
       
        
    
    const YoutubeHandler=(id,name,title)=>{
      Youtube.get(`search?part=snippet&q=${name||title}+trailer&type=video&maxResults=1&key=${youtube_Api}`).then((res)=>{
                  if(res.data.items && res.data.items.length > 0){
                    setUrl({key:res.data.items[0].id.videoId})}
                  
    })
    .catch((err)=>
    console.log("Youtube Error",err))
  }
  
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
     const slideLeft=()=>{
    var Slider=document.getElementById('slide'+props.rowID)
    Slider.scrollLeft=Slider.scrollLeft-500
  }
   const slideRight=()=>{
    var Slider=document.getElementById('slide'+props.rowID)
    Slider.scrollLeft=Slider.scrollLeft+500
  }
  
  return (
      <div className={`lg:mx-8 mx-3 mb-5 ${props.isBlured 
  ? "blur-sm" 
  : ""}`}>
      <h1 className="font-semibold text-white text-3xl my-8">{props.title}</h1>
      <div className='relative'>
           
                <MdKeyboardArrowLeft onClick={slideLeft} size={50} className='absolute left-0  top-1/3  opacity-0 hover:opacity-100  text-black bg-white rounded-full hidden -ml-3 z-10 lg:block sm:hidden'/>
                <MdKeyboardArrowRight onClick={slideRight}  size={50} className='absolute top-1/3  right-0 opacity-0 hover:opacity-100 z-10 text-black bg-white rounded-full hidden -mr-3 lg:block sm:hidden'/>
               
            <div  id={'slide'+props.rowID} className=" flex-nowrap scroll-smooth no-scroll-bar overflow-x-scroll overflow-y-hidden flex lg:space-x-4 space-x-2 text-white ">

            {movies.map((obj)=>
               (
               
                <div  key={obj.id} className=" relative flex-shrink-0 flex flex-col items-center max-w-[350px] cursor-pointer hover:scale-110 transition-transform group ">
                <img onClick={()=>moviehandler(obj)} key={obj.id} className={props.isSmall? "md:max-h-[200px] max-h-[100px]  ": "md:max-h-[250px] max-h-[100px]  "}src={`${ImgUrl+obj.backdrop_path}`}alt="card-img"/>
                <p className="break-words w-[150px] text-center">{obj.name||obj.title}</p>
                <p onClick={()=>savedHandler(obj)}>
                {like?<MdOutlineFavorite className=' absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity'/>:<MdFavoriteBorder  className=' absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity'/>}
                </p>
                </div>
              
              
             ) )}
             
        </div>
        
        </div>
    {url&& <YouTube videoId={url.key} opts={opts} />}
    
 </div>

  )
}
export default Card
