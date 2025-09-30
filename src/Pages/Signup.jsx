import React, { useEffect } from 'react'
import { useState } from 'react'
import { UserAuth } from '../Context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import Footer from '../Componets/third-sec/Footer'
import { IoIosArrowBack } from "react-icons/io";
const Signup = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
    const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {user,signUp}=UserAuth()
  const Navigate=useNavigate();
  const handler= async (e)=>{
     e.preventDefault();
     try{
      const res=await signUp(email,password);
        Navigate('/')

     }catch(error){
       console.log(error)
     }
    }
    const ExitHandler=()=>{
     Navigate('/SignIn')
   }
  return (
    <div>
     <div className=" relative h-[750px]  bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.2)),url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center flex justify-center items-center">
                <div className='absolute top-0 left-0 flex justify-center items-center caret-transparent'>
                  <IoIosArrowBack onClick={ExitHandler} size={30} className='lg:hidden sm:block me-5 text-white '/>
                <img className='  p-5 md:ms-[130px] lg:w-[190px] md:w-[120px] w-[100px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo"/>
               </div>
   
       <div className=" text-white font-bold absolute  max-w-[450px] w-[90%] flex flex-col   p-10 bg-gradient-to-r from-black/70 to-black/40 rounded">
                
                 <h1 className='text-4xl p-8 caret-transparent'>Sign Up</h1>
                 <form onSubmit={handler}>
                 <div className=' bg-gradient-to-r from-[rgba(87,99,116,0.5)] to-[rgba(116,130,148,0.5)] px-10 py-1 w-full border border-white mb-2 flex flex-col rounded'>
                  <label className=' font-semibold text-sm text-gray-300 ' htmlFor="Email">Email or Mobile number</label>
       <input className=" outline-none" type="email" value={email} id="Email" onChange={(e)=>setEmail(e.target.value)}></input>
       </div>
        <div className=' bg-gradient-to-r from-[rgba(87,99,116,0.5)] to-[rgba(116,130,148,0.5)] px-10 py-1 w-full border border-white mb-2 flex flex-col rounded'>
                  <label className=' font-semibold text-sm text-gray-300 'htmlFor="Password">Password</label>
       <input className=" outline-none" type="password" value={password} id="Password" onChange={(e)=>setPassword(e.target.value)}></input>
       </div>
       <button type='submit' className=" w-full py-3 caret-transparent px-10 bg-[#e50914] border-0 rounded-sm leading-[17px] text-sm text-white font-semibold cursor-pointer">Sign Up </button>
        
          <p className='py-3 text-center underline hover:text-gray-400 cursor-pointer'>Forget password?</p>
          
        
         <label htmlFor="remember-me" className='flex items-center'> 
         <input id="remember-me" type="checkbox" className="w-5 h-5 pe-3" />
       
           <span className='ps-3 caret-transparent'>Remember me</span></label>
          <p className='py-5 text-gray-300 caret-transparent'>already have an account?
            <Link to='/SignIn' className='hover:underline text-white'>Sing In now</Link>
            </p>
          <p className='text-sm text-gray-400 pb-5 caret-transparent'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          <a href="#" className='text-blue-300 underline cursor-pointer'>Learn more.</a>
       </form>
        </div>
        
        </div>
        <Footer/>
        </div>
 
  
  
  )
}

export default Signup
