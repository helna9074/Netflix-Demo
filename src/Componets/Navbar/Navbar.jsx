import React from 'react'
// import './Navbar.css'
import {Link} from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'

function Navbar() {
  const{user,logOut}=UserAuth()
  const handler =async()=>{
    try{
        await logOut();
    }catch(error){
       console.log(error)
    }
  }
  return (
    <div className='flex justify-between bg-[#111] w-screen py-4 px-2 h-[55px] fixed top-0 items-center z-50 caret-transparent'>
        
      <img className=' hidden lg:block ms-8 w-[110px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo"/>
      <img className=" block lg:hidden  w-5 left-[20px]  " src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="logo"/>
      <div className='flex fixed right-[30px] gap-1 justify-center items-center'>
           <p className="text-white text-sm m-0  hidden lg:block cursor-pointer">UNLIMITED TV SHOWS & MOVIES</p>
           {
           user?.email?
            <Link to='/Account' className='text-sm text-white font-bold p-5'>Account</Link>:
           <Link to="/Join-now" className="py-3 px-10 bg-[#e50914] border-0 rounded-sm leading-[17px] text-sm text-white font-semibold cursor-pointer" type='submit'>Join now</Link>


           }
           
           {user?.email?
                 <button onClick={handler} className='py-3 px-6 border border-[#888] leading-[17px] bg-transparent text-white rounded-sm cursor-pointer' type='submit'>Logout</button>:
                 <Link to ="/SignIn" className='py-3 px-6 border border-[#888] leading-[17px] bg-transparent text-white rounded-sm cursor-pointer' type='submit'>Sing in</Link>
           

           }
           
      </div>
    </div>
  )
}

export default Navbar




// const Navbar = () => {
//   return (
//     <div className='bg-red-500 h-20 flex justify-between items-center px-10' >
//       <h3>Iam navbar</h3>
//       <button className='bg-green-400 py-2 px-10 rounded-md text-white font-semibold hover:bg-green-500 cursor-pointer'>Signup</button>
      
//     </div>
//   )
// }

// export default Navbar
