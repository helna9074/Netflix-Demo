import React from 'react'
import {Link} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import SavedShows from '../Componets/Navbar/SavedShows'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Account = () => {
    const{user,logOut}=UserAuth()
    const handler =async()=>{
      try{
          await logOut();
      }catch(error){
         console.log(error)
      }
    }
    
    const navigate=useNavigate();
 const ExitHandler=()=>{
   navigate('/')
 }
  return (
     <div className='text-white caret-transparent'>
       <div className='flex justify-between w-screen p-5  h-[80px] fixed top-0 z-10 items-center'>
        <div className='flex relative '>
        <IoIosArrowBack onClick={ExitHandler} size={30} className='lg:hidden sm:block -ms-5 me-2 '/>
      <img className=' md:ms-8  lg:w-[110px] md:w-[80px] w-[60px] ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo"/>
      </div>
       <div>
        <Link to='/' className="text-sm font-bold p-5">Home</Link>
        <button onClick={handler} className='py-3 px-6  leading-[17px]   cursor-pointer' type='submit'>Logout</button>
       </div>
      </div>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt="" className='relative h-[500px] w-screen object-cover'/>
        <div className='fixed top-0 left-0 bg-black/60 h-full w-full '/>
        <div className=' absolute  top-[15%] left-[5%]' >

        </div>
      <SavedShows/>
   
     </div>
    
  )
}

export default Account
