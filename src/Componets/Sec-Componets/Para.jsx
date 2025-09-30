import React from 'react'

const Para = ({handler}) => {
  return (
     
       
      <div className="max-w-[450px] md:mx-auto mx-8 my-[50px] lg:my-[100px] md:my-[200px]">
       <img className='mb-5' alt="" src="https://occ-0-8220-64.1.nflxso.net/dnm/api/v6/nZVnzNNIegknNmej1Y3hGtfUZfU/AAAAAYL3Poat96BIA7iKG0irg4MM5cXH4o6cb46c2ci_jINem1kWl-CbgntjgPFQVw.png?r=bff" width="260" height="62"></img>
      <div className='max-w-[380px] '>
       <p>Step <strong>1</strong> of <stron>3</stron> </p>
       <p className='font-bold text-3xl '>Finish setting up your account</p>
       <p className='my-5'>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
       <button onClick={()=>handler(true)} className="py-3 px-10  w-full bg-[#e50914] border-0 rounded-sm leading-[17px] text-sm text-white font-semibold cursor-pointer" type='submit'>Next</button>
    </div>
    </div>
 
  
   
  )
}

export default Para
