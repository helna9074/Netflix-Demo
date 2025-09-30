
import { useState,useEffect } from 'react'
import { UserAuth } from '../../Context/AuthContext'
import {db} from '../../firebase'
import { updateDoc,doc,onSnapshot, arrayRemove } from 'firebase/firestore'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ImgUrl } from '../../Constants/Constant';
import { IoMdClose } from "react-icons/io";
const SavedShows = () => {
  const {user}=UserAuth();
   const [movies,setMovies]=useState([])
    const slideLeft=()=>{
    var Slider=document.getElementById('slide')
    Slider.scrollLeft=Slider.scrollLeft-500
  }
   const slideRight=()=>{
    var Slider=document.getElementById('slide')
    Slider.scrollLeft=Slider.scrollLeft+500
  }
  useEffect(()=>{
    if(!user?.email) return ;
     const unSnap= onSnapshot(doc(db,'user',`${user?.email}`),(doc)=>{
        setMovies(doc.data()?.savedShows||[])
         console.log("doc data",doc.data())
     
      })
      return ()=> unSnap();
  },[user?.email])
  const movieRef=doc(db,'user',`${user?.email}`)
  const handler=async(Movie)=>{
    try{
        // const result=movies.filter((item)=>
        //   item.id!==MovieId
        // );
        await updateDoc(movieRef,{
          savedShows:movies.filter(item=>item.id!==Movie.id)
        })
    }catch(error){
      console.log(error)
    }
  }
  return (
   
 
    <div  className=' overflow-x-hidden text-white px-5 pb-5 focus:outline-none  caret-transparent' >
      
      <h1 className="font-bold md:text-2xl text-xl  lg:text-3xl my-8 ps-2 ">My Shows</h1>
      {movies.length>0?
      <div className='relative'>
           
                <MdKeyboardArrowLeft type='button' onClick={slideLeft} size={50} className='absolute left-0  top-1/3  opacity-50  text-black bg-white rounded-full hidden -ml-4 z-10 lg:block sm:hidden focus:outline-none'/>
                <MdKeyboardArrowRight type='button' onClick={slideRight}  size={50} className='absolute top-1/3  right-0  opacity-50 z-10 text-black bg-white rounded-full hidden -mr-4 lg:block sm:hidden focus:outline-none'/>
               
            <div  id={'slide'} tabIndex={-1} className=" flex-nowrap scroll-smooth no-scroll-bar overflow-x-scroll overflow-y-hidden flex lg:space-x-4 space-x-2 text-white focus:outline-none" style={{caretColor:'transparent'}}>

            {movies.map((item)=>
               (
               
                <div  key={item.id} className=" relative flex-shrink-0 flex flex-col items-center max-w-[350px] cursor-pointer hover:scale-110 transition-transform group ">
                <img  className= " md:max-h-[250px] max-h-[100px]  "src={`${ImgUrl+item?.image}`}alt="card-img"/>
                <p className="break-words w-[150px] text-center">{item.title}</p>
                <IoMdClose onClick={()=>handler(item)} className='absolute top-3 right-2 hidden group-hover:block' size={20}/>
                </div>
              
              
             ) )}
             
        </div>
        
        </div>:<div className='text-center text-5xl font-semibold'>Empty</div>
}
   
    
 </div>
   
  )
}

export default SavedShows
