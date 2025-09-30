import React from 'react'
import NavSec from '../Componets/Sec-Componets/NavSec'
import Para from '../Componets/Sec-Componets/para'
import Footer from '../Componets/Sec-Componets/Footer'
import Sing from '../Componets/Sec-Componets/Sing'
import { useState,useEffect } from 'react'

const Join = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // scroll to top when page mounts
  }, []);
 const [Showsing,setShow]=useState(false)
 
  return (
    <div className=' flex flex-col min-h-screen bg-white'>
        <NavSec/>
        {Showsing?
         <Sing/> :
        <Para handler={setShow}/>
        }
        
        <Footer/>
      
    </div>
  )
}

export default Join
