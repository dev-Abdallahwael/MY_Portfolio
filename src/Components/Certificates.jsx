import React from 'react'
import RollingGallery from './RollingGallery ';
import { motion } from 'framer-motion';

export default function Certificates() {
  return (
    
  <>
    <motion.section
        initial={{opacity:0 , y:100}}
        whileInView={{opacity:1 ,y:0}}
        transition={{duration:1.3 , ease: 'easeOut'}}
        viewport={{once: true , amount: 0.30 }}  
    
    
    id="certificates" className=' md:pt-10 py-5'>
      <motion.h1 
      
        initial={{opacity:0 , y:"-100%"}}
        whileInView={{opacity:1 ,y:0}}
        transition={{duration:1 , delay: 1 , ease: 'easeOut'}}
        viewport={{once: true , amount: 0.20 }}  
      
      className=" text-white border-b-2 border-red-700 w-fit pt-10 mx-auto text-3xl md:text-5xl font-bold text-center md:py-5"><i class="fa-solid fa-graduation-cap mr-2"></i>Certificates</motion.h1>
      
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </motion.section>
  </>
  )
}
