import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.4" className='w-full min-h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-24 md:mt-32 lg:mt-40 px-6 md:px-12 lg:px-20">
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return ( 
                <div  key={index} className="masker">
                    <div className="w-fit flex item-center">
                        {index === 1 && (
                            <motion.div initial={{width:0}} 
                                 animate={{width: "8vw"}} 
                                 transition= {{ ease: [0.76, 0, 0.24, 1], duration : 1.5 }}
                                  className='mr-2 md:mr-3 w-[14vw] md:w-[8vw] h-[8vw] md:h-[4.5vw] overflow-hidden object-fill mt-1 rounded-md relative'>
                                 <img className= 'rounded-1xl' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </motion.div>)}
                        <h1 className="flex item-center uppercase text-[12vw] md:text-[8vw] lg:text-[6vw] h-full leading-[10vw] md:leading-[7vw] lg:leading-[5vw] font-['Founders_Grotesk_X-Condensed'] font-medium">
                        {item}</h1>
                    </div>
                </div>
                );
            })}
           
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-10 md:mt-20 lg:mt-28 flex flex-col md:flex-row gap-4 md:gap-0 justify-between item-center py-5 px-6 md:px-12 lg:px-20">
               {["For public and private companies","From the first pitch to IPO"].map((item,index) => (
                <p key={index} className='text-sm md:text-base font-light tracking-tight leading-none'>
                  {item}
                </p>))}
        
            <div className="start flex item-center gap-3 md:gap-5"> 
               <div className="px-4 md:px-5 py-2 border-[1px] border-zinc-500 font-light items-center text-sm md:text-md uppercase rounded-full">start the project</div>
               <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center overflow-none border-[2px] border-zinc-400 font-light rounded-full ">
                   <span className='rotate-[45deg] '>
                        <FaArrowUpLong/>
                   </span>               
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage