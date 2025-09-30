import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='flex items-center justify-center text-white mt-2 flex-col text-center p-5'>
        <h1 className='font-semibold text-3xl mb-5'>There's Even More To Watch</h1>
        <div>
         <p className='max-w-xl mb-5 text-lg'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.</p>
                    <Link to='/Join-now' className="py-3 px-10 bg-[#e50914] border-0 rounded-sm leading-[17px] text-sm text-white font-semibold cursor-pointer" type='submit'>Join now</Link>
          </div>
          </div>
          <div className='font-light text-gray-400 hover:underline mt-10 mx-3 max-w-2xl text-center'>
        <a href='#'>Read about Netflix Tv shows and Movies and Watch bones Videos on Tudum.com </a>
       </div> 
   <div className='font-light text-gray-400 hover:underline my-10 p-10 mx-4 max-w-3xl' >
   <a href='#' className='block mb-10'>Questions? Contact us</a>
    <ul className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-2xl gap-3'>
        <li>FAQ</li>
        <li>Help Center</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookies Prefrences</li>
         <li>Corporate Information</li>

    </ul>
      </div>
      
 </div>
  
    // </div>
  )
}

export default Footer
