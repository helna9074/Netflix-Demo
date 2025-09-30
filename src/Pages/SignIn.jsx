import React, { useEffect } from 'react'
import { useState } from 'react'
import { UserAuth } from '../Context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import Footer from '../Componets/third-sec/Footer'
import { IoIosArrowBack } from "react-icons/io";


const SignIn = () => {
   const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {user,logIn}=UserAuth()
  const [Error,setError]=useState('')
  const Navigate=useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  const handler= async (e)=>{
     e.preventDefault();
     try{
      const res=await logIn(email,password);
        Navigate('/')

     }catch(error){
       console.log(error)
       setError(error.message)
     }
    }
     const ExitHandler=()=>{
      Navigate('/')
   }
  return (
    <div>
     
        <div className=" relative h-[750px]  bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.2)),url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center flex justify-center items-center">
        
                <div className='caret-transparent absolute top-0 left-0 flex justify-center items-center '>
                  <IoIosArrowBack onClick={ExitHandler} size={30} className='lg:hidden sm:block text-white caret-transparent'/>
                <img className='  p-5 md:ms-[130px] lg:w-[190px] w-[100px] md:w-[120px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo"/>
               </div>
              <div className=" text-white font-bold absolute  max-w-[450px] w-[90%] flex flex-col   p-10 bg-gradient-to-r from-black/70 to-black/40 rounded">
                
                 <h1 className='text-4xl p-8 caret-transparent'>Sign in</h1>
                 <form onSubmit={handler}>
                 <div className=' bg-gradient-to-r from-[rgba(87,99,116,0.5)] to-[rgba(116,130,148,0.5)] px-10 py-1 w-full border border-white mb-2 flex flex-col rounded'>
                  <label className=' font-semibold text-sm text-gray-300 ' htmlFor="Email">Email or Mobile number</label>
       <input className=" outline-none" type="email" value={email} id="Email" onChange={(e)=>setEmail(e.target.value)}></input>
       </div>
       {Error?<p>{Error}</p>:null}
        <div className=' bg-gradient-to-r from-[rgba(87,99,116,0.5)] to-[rgba(116,130,148,0.5)] px-10 py-1 w-full border border-white mb-2 flex flex-col rounded'>
                  <label className=' font-semibold text-sm text-gray-300 'htmlFor="Password">Password</label>
       <input className=" outline-none" type="password" value={password} id="Password" onChange={(e)=>setPassword(e.target.value)}></input>
       </div>
       <button type='submit' className=" w-full py-3 px-10 bg-[#e50914] border-0 rounded-sm leading-[17px] text-sm text-white font-semibold cursor-pointer">Sign in</button>
         <p className='text-center caret-transparent'>OR</p>
          <button className=" w-full py-3 px-10 bg-gradient-to-r from-[rgba(220,220,220,0.5)] to-[rgba(220,220,220,0.5)] border-0 rounded-sm leading-[17px] text-sm text-white font-semibold cursor-pointer" type='submit'>Use a sing in code</button>
          <p className='py-3 text-center underline hover:text-gray-400  caret-transparent cursor-pointer'>Forget password?</p>
         
        
         <label htmlFor="remember-me" className='flex items-center'> 
         <input id="remember-me" type="checkbox" className="w-5 h-5 pe-3" />
        
           <span className='ps-3 caret-transparent'>Remember me</span></label>
          <p className='py-5 text-gray-300 caret-transparent'>New to Netflix?
            <Link to='/Signup' className='hover:underline text-white cursor-pointer'>Sing up now</Link>
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

export default SignIn
