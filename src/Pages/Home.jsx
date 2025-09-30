import React from 'react'
import Navbar from '../Componets/Navbar/Navbar'
import Hero from '../Componets/Navbar/Hero'
import Card from '../Componets/Navbar/Card'
import Footer from '../Componets/Navbar/Footer.jsx'
import { originals,Action,Comedy,Animation,Crime,Horror,Romance } from '../Urls.jsx'
import { AuthContextProvider } from '../Context/AuthContext.jsx'

const Home = () => {
    
  return (
    <div>
     
        <Navbar/>
      <Hero/>
      <Card rowID={1} title="Popular" url={originals}/>
      <Card rowID={2} title="Action" isSmall url={Action}/>
      <Card rowID={3} title="comedy" url={Comedy}/>
       <Card rowID={4} title="Animation" url={Animation}/>
        <Card rowID={5} title="Crime" url={Crime}/>
         <Card rowID={6} title="Horror" url={Horror}/>
       
           <Card rowID={7} title="Animation" url={Animation} isBlured/>
            <Card rowID={8} title="Crime" url={Crime} isBlured/>
            <Footer/>
      </div>
  )
}

export default Home
