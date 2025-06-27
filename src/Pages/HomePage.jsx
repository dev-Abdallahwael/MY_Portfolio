import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Certificates from '../Components/Certificates'
import Contactme from '../Components/Contactme'
export default function HomePage() {
  return (
    <>
    <section id="home"> <Header/> </section>
      
    <div className=' container md:px-0 px-5'>
      <About/>
      <Certificates/>
      <Projects/>
      <Contactme/>
    </div>
    
    
    </>
  )
}
