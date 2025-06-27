import React from 'react';
import bg from "../assets/Cover.jpg";
import TrueFocus from '../Animations/TrueFocus ';
import { motion } from 'framer-motion';
import BlurText from "../Animations/BlurText ";

export default function Header() {
  return (
    <>
      <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center  "
        style={{ backgroundImage: `url(${bg})` }}>

            <motion.div
            initial={{opacity: 0 , y: '-80%'}}
            animate={{opacity: 1 , y: 0}}
            transition={{duration: 1 , ease:"easeIn"}}
            className='space-y-5'
            >
                <BlurText
                  text="Abdallah Wael"
                  delay={600}
                  animateBy="words"
                  direction="top"
                  className=" text-5xl md:text-7xl font-semibold"
                />
                <motion.div
                        initial={{opacity:0 , y:-100}}
                        animate={{opacity:1 ,y:0}}
                        transition={{duration:1.2 , delay: 1.2 , ease: 'easeOut'}}>
                          <TrueFocus 
                          sentence="Developer Designer"
                          manualMode={false}
                          blurAmount={3.5}
                          borderColor="red"
                          animationDuration={0.6}
                          pauseBetweenAnimations={1}
                          />
                </motion.div>
            </motion.div>

      </div>
    </>
  );
}
