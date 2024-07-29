
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.4" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return ( 
                <div className="masker">
                    <div className="w-fit flex item-centre">
                        {index === 1 && (
                            <motion.div initial={{width:0}} 
                                 animate={{width: "8vw"}} 
                                 transition= {{ ease: [0.76, 0, 0.24, 1], duration : 1 }}
                                  className='mr-3 w-[8vw] h-[4.5vw] overflow-hidden object-fill  mt-1 rounded-md relative'>
                                 <img className= 'rounded-1xl' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </motion.div>)}
                        <h1 className="flex item-centre uppercase text-[6vw] h-full leading-[5vw] font-['Founders_Grotesk_X-Condensed'] font-medium">
                        {item}</h1>
                    </div>
                </div>
                );
            })}
           
        </div>
      
        <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between item-centre py-5 px-20">
               {["For public and private companies","From the first pitch to IPO"].map((item,index) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
        
            <div className="start flex item-centre gap-5"> 
               <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase capitalized rounded-full">start the project</div>
               <div className="w-10 h-10 flex items-centre justify-centre overflow-none border-[2px] border-zinc-400 font-light rounded-full ">
                   <span className='rotate-[45deg] pl-2 pt-1'>
                        <FaArrowUpLong/>
                   </span>               
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage
