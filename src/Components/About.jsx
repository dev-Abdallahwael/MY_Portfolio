import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import Ts from "../assets/typescript.png"
import Tcss from "../assets/tailwind-css.png"
import Bs from "../assets/icons8-bootstrap-logo-48.png"
import react from "../assets/reactlogo.svg"
import next from "../assets/Nextjs.png"
import git from "../assets/git.png"
import figma from "../assets/figma.png"
import myimg from "../assets/mypic.jpg"
import DecryptedText from './DecryptedText';
import { motion } from 'framer-motion';
import fm from "../assets/framer-motion-logo.png"
import FA from "../assets/fa.jpeg"
import JQ from "../assets/JQuery.png"
import Axios from "../assets/axios.png"
import Formik from "../assets/Formik.png"
import Yup from "../assets/yup.png"
import npm from "../assets/img_npm.jpg"
export default function About() {
  return (
    <>
          <motion.section 
          initial={{opacity:0 , y:80}}
          whileInView={{opacity:1 ,y:0}}
          transition={{duration:1.2 , ease: 'easeInOut'}}
          viewport={{once: true , amount: 0.40 }}  
          id="about"
          className='  py-3 md:py-16'>
            <div className=' grid grid-cols-12  gap-5 xl:gap-28 '>

                <div className=' col-span-12 md:col-span-7 space-y-5'>
                    <h3 className=' text-3xl font-bold py-5 text-red-700'>What I do</h3>
               
                    <DecryptedText
                    text="I am a front-end developer specializing in building responsive, accessible, and high-performance web interfaces.With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I translate design concepts into interactive digital experiences.I am committed to writing clean, maintainable code and delivering seamless user experiences across all devices."
                    animateOn="view"
                    revealDirection="center"
                    speed={160}
                    />
                 <h3 className=' text-3xl font-bold py-5  text-red-700'>Skills & tools</h3>
                <section className=' flex gap-3 flex-wrap'>

                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={html} alt="HTML" className='mr-2'/><h5>HTML</h5>
                    </div>

                     <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={css} alt="Css" className='mr-2'/><h5>CSS</h5>
                    </div>

                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={js} alt="JS" className='mr-2'/><h5>JavaScript</h5>
                    </div>

                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={Ts} alt="Ts" className='mr-2'/><h5>TypeScript</h5>
                    </div>

                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={Tcss} alt="Tailwind" className='mr-2'/><h5>Tailwind</h5>
                    </div>

                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={Bs} alt="BootStrap" className='mr-2 w-8 h-8'/><h5>Bootstrap</h5>
                    </div>

                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={react} alt="React" className='mr-2 w-8 h-8'/><h5>React</h5>
                    </div>

                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={next} alt="Next" className='mr-2 w-8 h-8'/><h5>Next</h5>
                    </div>
                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={git} alt="GIt & Github" className='mr-2 w-8 h-8'/><h5>git & github</h5>
                    </div>

                    <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                      transition-all duration-150 cursor-default hover:scale-105'>
                        <img src={figma} alt="Figma" className='mr-2 h-8 w-7'/><h5>Figma</h5>
                    </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={fm} alt="Framer-motion" className='mr-2  w-8 h-8 rounded-lg'/><h5>Framer-motion</h5>
                      </div>                    

                        <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={FA} alt="font awesome" className='mr-2  w-8 h-8 rounded-lg'/><h5>Font awesome</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Axios} alt="Axios" className='mr-2  w-8 h-8 rounded-lg'/><h5>Axios</h5>
                      </div>
                        <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Formik} alt="Formik" className='mr-2  w-8 h-8 rounded-lg'/><h5>Formik</h5>
                      </div>
                      
                        <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Yup} alt="Yup" className='mr-2  w-8 h-8 rounded-lg'/><h5>YUP</h5>
                      </div>
                        <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={npm} alt="npm" className='mr-2  w-8 h-8 rounded-lg'/><h5>npm Libraries</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={JQ} alt="JQ" className='mr-2  w-8 h-8 rounded-lg'/><h5>JQuery</h5>
                      </div>


                </section>

             <div  className='flex justify-around py-10'>

                {/* Download Button */}
                <a href="/My Resume.pdf" download>
                <button className="group bg-red-800 px-4 py-1 text-slate-300 rounded-md font-semibold 
                                    hover:scale-105 transition-all duration-300 ease-in-out flex items-center
                                    shadow-md hover:shadow-[0_0_25px_#dc2500]">
                    <i className="fa-solid fa-download mr-2 transition-all duration-150 group-hover:rotate-12"></i>
                    Download CV
                </button>
                </a>
                {/* Contact Me Button */}
                <button className="group bg-red-800 px-4 py-1 text-slate-300 rounded-md font-semibold 
                                hover:scale-105 transition-all duration-300 ease-in-out flex items-center
                                shadow-md hover:shadow-[0_0_25px_#dc2500]">
                        <i className="fa-solid fa-paper-plane mr-2 transition-all duration-150 group-hover:rotate-45"></i>
                        <a href="#contact">Contact Me</a>
                </button>
             </div>
   



                </div>

                <div className='col-span-12 md:col-span-5'>
                    <img src={myimg} alt="my picture" className=' w-2/3  rounded-3xl mx-auto hover:scale-105 transition-all duration-150' />
                </div>

            </div>





          </motion.section>
    </>
  )
}
