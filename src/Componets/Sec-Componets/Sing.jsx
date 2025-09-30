import React from 'react'
import { useState } from 'react'
const Sing = () => {
    
     const [form,setForm]=useState({
      Email:"",
      Password:"",
      error:{email:"",password:""}
     })
     const handlerSubmit=(e)=>{
      e.preventDefault();
      let error={email:"",password:""}
      // Email check
      if(!form.Email.trim()){
        error.email="Email is Required"
      }else if(form.Email.length<5||form.Email.length>50){
        error.email="Email must have 5 to 50 characters"
      }else if(!form.Email.includes('@')){
              error.email="Email must include @"
      }

      // password check
       if(!form.Password.trim()){
        error.password="Password is Required"
      }else if(form.Password.length<6){
        error.password="password must have 6 characters"
      }
      setForm({...form,error})
     }

  return (
    <div className="max-w-[450px] md:mx-auto mx-8 my-[50px] lg:my-[100px] md:my-[200px]">
       
      <div className='max-w-[380px] '>
       <p>Step <strong>1</strong> of <stron>3</stron> </p>
       <p className='font-bold text-3xl '>Create a password to start your membership</p>
       <p className='my-5'>Just a few more steps and you’re done!We hate paperwork, too.</p>
       <form onSubmit={handlerSubmit}>
       <div className=' border border-red-500 mb-2'>
       <input className="p-3 w-full" type="email" value={form.Email} placeholder='Email' onChange={(e)=>setForm({...form,Email:e.target.value})}></input>
       </div>
        {
        form.error.email&&(
          
          <p className='text-red-500 font-bold text-sm mb-2'>{form.error.email}</p>
        )
       }
        <div className=' border border-red-500 mb-3'>
       <input onClick={handlerSubmit} className="p-3 w-full" type="password" placeholder='password' value={form.Password} onChange={(e)=>setForm({...form,Password:e.target.value})}></input>
       
       </div>
       {
        form.error.password && (
          
          <p className='text-red-500 font-bold text-sm mb-1 pb-3'>{form.error.password}</p>
        )
       }
       <button type='submit' onClick={()=>handler(true)} className="py-6 px-10  w-full bg-[#e50914] border-0 rounded-sm leading-[17px] text-sm text-white font-semibold cursor-pointer">Next</button>
       </form>
       
    </div>
    </div>
 
  )
}

export default Sing
