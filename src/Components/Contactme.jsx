import { motion } from 'framer-motion';
export default function Contactme() {
  return (

    <section  id="contact" className= 'md:px-0 px-6 pb-14 mt-16 pt-8 container text-xl space-y-10'>

            <motion.div
            initial={{ opacity:0 , y:"-100%" }}
            whileInView={{ opacity:1 , y:0 }}
            transition={{duration: 1 , ease: 'easeOut' }}
            viewport={{once:true , amount: 0.5}}
            
            className='text-center pb-5 '>
                <h1 className=" text-white border-b-2 border-red-700 w-fit mx-auto  text-3xl md:text-5xl font-bold text-center py-5"><i className="fa-solid fa-envelope text-4xl"></i> Contact me</h1>
            </motion.div>

            <motion.div
                initial={{opacity:0 }}
                whileInView={{opacity:1}}
                transition={{duration: 1.3 , ease: 'easeIn' }}
                viewport={{once:true , amount: 0.4}}      
            >
                <div className='flex md:gap-80 gap-8 justify-center items-center'>
                        <div className="flex md:gap-80 gap-8 justify-center items-center">
                        <div className="flex flex-col items-center text-red-700 hover:text-gray-100 transition-all duration-150">
                            <div className="w-16 h-16 bg-zinc-900 flex justify-center items-center p-2 rounded-full hover:bg-black">
                            <i className="fa-solid fa-location-arrow fs-4"></i>
                            </div>
                            <span className="mt-2 text-sm font-medium text-red-700 text-wrap">Egypt</span>
                        </div>
                        </div>

                                            
                        <div className="flex flex-col items-center text-red-700 hover:text-gray-100 transition-all duration-150">
                        <a
                            href="mailto:abdallah2003wael@gmail.com"
                            className="w-16 h-16 bg-zinc-900 flex justify-center items-center p-2 rounded-full hover:bg-black"
                        >
                            <i className="fa-solid fa-envelope fs-4"></i>
                        </a>
                        <span className="mt-2 text-sm font-medium text-red-700">Email me</span>
                        </div>

                        <a
                        href="tel:+201097587504"
                        className="flex flex-col items-center text-red-700 hover:text-gray-100 transition-all duration-150"
                        >
                        <div className="w-16 h-16 bg-zinc-900 flex justify-center items-center p-2 rounded-full hover:bg-black">
                            <i className="fa-solid fa-phone fs-4"></i>
                        </div>
                        <span className="mt-2 text-sm font-medium text-red-700">Call</span>
                        </a>
                    
                </div>

                <form action="https://formsubmit.co/abdallah2003wael@gmail.com" 
                      method="POST" 
                      className='my-10 text-sm md:text-lg'>
                
                <div className='flex gap-5'>
                    <input type="text" name="name" id="" placeholder='Name' className=' text-black w-1/2 border-0 bg-slate-300 rounded-lg py-1 placeholder:text-sm placeholder:ps-2 placeholder:text-gray-800 focus:border-gray-800 transition-all duration-150' />
                    <input type="email" name="email" id="" placeholder='Email' className= ' text-black w-1/2 border-0 bg-slate-300 rounded-lg py-1 placeholder:text-sm placeholder:ps-2 placeholder:text-gray-800 focus:border-gray-800 transition-all duration-150' />

                </div>
                    <textarea name="textarea" id="" cols="30" placeholder='Message' className='bg-gray-300 w-full my-5 placeholder:text-sm placeholder:ps-2 rounded-lg placeholder:text-gray-800 focus:border-gray-800 transition-all duration-150  placeholder:pt-2 text-black '></textarea>
                <button className="group bg-red-800 px-4 py-1 text-slate-300 rounded-md font-semibold 
                                hover:scale-105 transition-all duration-300 ease-in-out flex items-center
                                shadow-md hover:shadow-[0_0_25px_#dc2500]">
                        Submit
                </button>
                </form>
            </motion.div>

    </section>
  )
}
