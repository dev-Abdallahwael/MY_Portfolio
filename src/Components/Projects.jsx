import img from "../assets/Cover.jpg";
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import Tcss from "../assets/tailwind-css.png"
import Bs from "../assets/icons8-bootstrap-logo-48.png"
import react from "../assets/reactlogo.svg"
import fm from "../assets/framer-motion-logo.png"
import DB from "../assets/TMDB API.jpg"
import FA from "../assets/fa.jpeg"
import JQ from "../assets/JQuery.png"
import api from "../assets/weatherapi.jpg"
import Axios from "../assets/axios.png"
import Formik from "../assets/Formik.png"
import ecomm from "../assets/ecomm.png"
import Yup from "../assets/yup.png"
import npm from "../assets/img_npm.jpg"
import ecommpics from "../assets/01.png"
import moviespics from "../assets/02.png"
import weatherpics from "../assets/03.png"

import { motion } from 'framer-motion';

export default function Projects() {

  return (
    <>
    <section


    id="projects" className="md:pb-5 pb-2">
      <motion.h1
        initial={{opacity:0 , y:"-100%"}}
        whileInView={{opacity:1 ,y:0}}
        transition={{duration:1 , delay: 1 , ease: 'easeOut'}}
        viewport={{once: true , amount: 0.20 }}  
      
      
      className=" text-white border-b-2 border-red-700 w-fit mx-auto text-3xl md:text-5xl font-bold text-center py-5"><i className="fa-solid fa-code mr-2"></i>Projects</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {/* Card 1 */}
            <motion.div
            initial={{opacity:0 , y:20}}
            whileInView={{opacity:1 ,y:0}}
            transition={{duration:1.2 , ease: 'easeOut'}}
            viewport={{once: true , amount: 0.3 }}  
            
            className="bg-zinc-900  rounded-lg p-4  hover:border-red-700 transition-all border-2 border-black duration-150 cursor-default hover:scale-105">
              <img src={moviespics}  className="rounded mb-4 hover:scale-105 transition-all duration-150" />
              {/* Card Title */}
              <h3 className="text-xl font-bold mb-2 text-center ">Movies website</h3>
              {/* Card Content */}
              <section className=' flex md:gap-2 gap-1 flex-wrap py-1'>

                      <div className='md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={react} alt="react" className='mr-2 w-8 h-8 rounded-lg'/><h5>React js</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Tcss} alt="tailwind" className='mr-2'/><h5>tailwind</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={fm} alt="Framer-motion" className='mr-2  w-8 h-8 rounded-lg'/><h5>Framer-motion</h5>
                      </div>

                      <div className='md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={DB} alt="TMDB API" className='mr-2  w-8 h-8 rounded-lg'/><h5>TMDB API</h5>
                      </div>

                        <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={FA} alt="font awesome" className='mr-2  w-8 h-8 rounded-lg'/><h5>Font awesome</h5>
                      </div>

              </section>
              <h3 className=" font-semibold py-1"><i className="fa-solid fa-code mr-2"></i>Core Features:</h3>
              <section className="text-sm text-gray-400 pb-1  space-y-2">
                <li>Browse upcoming, trending, now playing & popular movies</li>
                <li>Search for movies with real-time results</li>
                <li>View detailed movie information</li>
                <li>Add & remove movies from your watchlist</li>
                <li>Dark mode toggle for an enhanced viewing experience</li>
                <li>Fully responsive design for all devices</li>
                <li>Custom loading screens to keep the UX smooth</li>              
              </section>
              <div className="flex md:gap-5 gap-1 items-center">
                <h3 className=" font-semibold py-1"><i className="fa-brands fa-github mr-1 md:mr-2"></i>GitHub:</h3><a href="https://github.com/dev-Abdallahwael/MyMovies_Web.git"
                className="text-gray-400 underline"><i className="fa-solid fa-link mr-1 md:mr-2"></i>View the project</a>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
            initial={{opacity:0 , y:20}}
            whileInView={{opacity:1 ,y:0}}
            transition={{duration:1.2 , ease: 'easeOut'}}
            viewport={{once: true , amount: 0.3 }}  
            
            className="bg-zinc-900  rounded-lg p-4  hover:border-red-700 transition-all border-2 border-black duration-150 cursor-default hover:scale-105">
              <img src={ecommpics}  className="rounded mb-4 hover:scale-105 transition-all duration-150" />
              {/* Card Title */}
              <h3 className="text-xl font-bold mb-2 text-center ">E-commerce website</h3>
              {/* Card Content */}
              <section className=' flex gap-2 flex-wrap py-1'>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={react} alt="react" className='mr-2 w-8 h-8 rounded-lg'/><h5>React js</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Tcss} alt="tailwind" className='mr-2'/><h5>tailwind</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Axios} alt="Axios" className='mr-2  w-8 h-8 rounded-lg'/><h5>Axios</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={ecomm} alt="E-commerce API" className='mr-2  w-8 h-8 rounded-lg'/><h5>E-commerce API</h5>
                      </div>

                        <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={FA} alt="font awesome" className='mr-2  w-8 h-8 rounded-lg'/><h5>Font awesome</h5>
                      </div>

                        <div className='md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Formik} alt="Formik" className='mr-2  w-8 h-8 rounded-lg'/><h5>Formik</h5>
                      </div>
                      
                        <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Yup} alt="Yup" className='mr-2  w-8 h-8 rounded-lg'/><h5>YUP</h5>
                      </div>
                        <div className='md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={npm} alt="npm" className='mr-2  w-8 h-8 rounded-lg'/><h5>npm Libraries</h5>
                      </div>
              </section>
              <h3 className=" font-semibold py-1"><i className="fa-solid fa-code mr-2"></i>Core Features:</h3>
              <section className="text-sm text-gray-400 pb-1 space-y-2">
                <li>User authentication with real-time form validation</li>
                <li>Browsing and viewing products in details</li>
                <li>Adding products to cart with live count updates</li>
                <li>Cash or online payments via Stripe redirection</li>
                <li>Mobile-friendly & fully responsive design</li>
                <li>Custom loading screens to enhance UX</li>
                <li>React Swiper For product sliders and smooth interactions</li>   
                <li>React Hot Toast  For sleek, responsive notifications</li>    
              </section>
              <div className="flex md:gap-5 gap-1 items-center">
                <h3 className=" font-semibold py-1"><i className="fa-brands fa-github mr-1 md:mr-2"></i>GitHub:</h3><a href="https://github.com/dev-Abdallahwael/E-commerce.git"
                className="text-gray-400 underline"><i className="fa-solid fa-link mr-1 md:mr-2"></i>View the project</a>
              </div>
            </motion.div>

            {/* Card 3 */}

            <motion.div
            initial={{opacity:0 , y:20}}
            whileInView={{opacity:1 ,y:0}}
            transition={{duration:1.2 , ease: 'easeOut'}}
            viewport={{once: true , amount: 0.3 }}  
            
            className="bg-zinc-900  rounded-lg p-4  hover:border-red-700 transition-all border-2 border-black duration-150 cursor-default hover:scale-105">
              <img src={weatherpics}  className="rounded mb-4 hover:scale-105 transition-all duration-150" />
              {/* Card Title */}
              <h3 className="text-xl font-bold mb-2 text-center ">Weather website</h3>
              {/* Card Content */}
              <section className=' flex gap-2 flex-wrap py-1'>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={html} alt="html" className='mr-2 w-8 h-8 rounded-lg'/><h5>HTML</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={css} alt="CSS" className='mr-2'/><h5>CSS</h5>
                      </div>

                      <div className='md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={Bs} alt="Bs" className='mr-2  w-8 h-8 rounded-lg'/><h5>Bootstrap</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={js} alt="js" className='mr-2  w-8 h-8 rounded-lg'/><h5>JavaScript</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={JQ} alt="JQ" className='mr-2  w-8 h-8 rounded-lg'/><h5>JQuery</h5>
                      </div>

                      <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={FA} alt="Font awesome" className='mr-2  w-8 h-8 rounded-lg'/><h5>Font awesome</h5>
                      </div>
                     <div className=' md:px-3 px-1 py-1 border-gray-700 border-2 w-fit rounded-lg flex justify-center items-center  hover:border-red-700
                        transition-all duration-150 cursor-default hover:scale-105'>
                          <img src={api} alt="api" className='mr-2  w-8 h-8 rounded-lg'/><h5>Weather APi</h5>
                      </div>

              </section>
              <h3 className=" font-semibold pt-5  pb-1"><i className="fa-solid fa-code mr-2"></i>Core Features:</h3>
              <section className="text-sm text-gray-400 pb-1 space-y-2 ">
                <li>View 3 days weather by using current location</li>
                <li>searching a specific country to view the weather details </li>
                <li>View detailed weather information</li>
                <li>Fully responsive design for all devices</li>
              </section>
              <div className="flex md:gap-5 gap-1 items-center">
                <h3 className=" font-semibold py-1"><i className="fa-brands fa-github mr-1 md:mr-2"></i>GitHub:</h3><a href="https://github.com/dev-Abdallahwael/weather-website-.git"
                className="text-gray-400 underline"><i className="fa-solid fa-link mr-1 md:mr-2"></i>View the project</a>
              </div>
            </motion.div>
        </div>



    </section>

    </>
  );
}
