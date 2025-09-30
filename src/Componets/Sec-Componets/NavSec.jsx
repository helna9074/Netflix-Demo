import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
const NavSec = () => {
   const navigate=useNavigate();
   const ExitHandler=()=>{
     navigate('/')
   }
  return (
    <div className=' border-b-1 border-gray-200'>
       <nav className='flex  w-full justify-between items-center p-[25px]   border-b-1 border-gray-400 '>
      <IoIosArrowBack onClick={ExitHandler} size={30} className='lg:hidden sm:block me-5 '/>
      <img className='md:w-[160px] w-[100px] lg:ms-[150px] ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo"/>
      <Link to='/SignIn' className=' py-3 px-6 font-bold lg:me-[130px] leading-[17px]  text-black rounded-sm cursor-pointer hover:bg-gray-200 hover:underline' type='submit'>Sing in</Link>
    </nav>
    </div>
  )
}

export default NavSec
