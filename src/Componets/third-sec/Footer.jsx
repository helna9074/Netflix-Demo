import React from 'react'

const Footer = () => {
  return (
    <div className=' lg:p-10 p-2 caret-transparent'>
        <div className=' text-gray-400  font-semibold lg:ms-10 mx-2 md:mx-5 lg:p-10 w-full' >
   <a href='#' className='block mb-10 font-semibold'>Questions? Call 000-800-919-1743 (Toll-Free)</a>
    <ul className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-3 underline'>
        <li>FAQ</li>
        <li>Help Center</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookies Prefrences</li>
         <li>Corporate Information</li>

    </ul>
     <div className='w-[100px]  text-white my-10 outline-2'>
        <select className='outline-none '>
            <option>English</option>
            <option>Română</option>
        </select>
      </div>

      </div>
     
    </div>
  )
}

export default Footer
