import React from 'react'

function Cards() {
  return (
    <div className='w-full min-h-screen bg-zinc-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-center px-5 md:px-10 lg:px-12 gap-4 md:gap-5 py-8 md:py-12'>
        <div className="cardContainer h-64 sm:h-72 md:h-[55vh] w-full lg:w-1/2">
            <div className="group card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                <img className='w-36 transition-transform duration-300 ease-out group-hover:scale-110' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='text-[#C9E767] absolute px-4 py-1 border-2 border-[#C9E767] rounded-full left-[30px] bottom-[30px] transition-colors duration-300 ease-out group-hover:bg-[#C9E767] group-hover:text-[#004D43]' >©2019-2022</button>
            </div>

        </div>

        <div className="cardContainer flex flex-col md:flex-row gap-4 md:gap-5 h-auto md:h-[55vh] w-full lg:w-1/2">
        <div className="group card relative flex items-center justify-center rounded-xl w-full h-64 sm:h-72 md:h-full bg-[#212121] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                <img className='w-36 transition-transform duration-300 ease-out group-hover:scale-110' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className=' text-zinc-300 absolute px-3 md:px-4 py-1 border-2 border-zinc-400 rounded-full left-[20px] md:left-[30px] bottom-[20px] md:bottom-[30px] transition-colors duration-300 ease-out group-hover:bg-zinc-300 group-hover:text-[#212121]' >RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="group card relative flex items-center justify-center rounded-xl w-full h-64 sm:h-72 md:h-full bg-[#212121] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                <img className='w-36 transition-transform duration-300 ease-out group-hover:scale-110' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className=' text-zinc-300 absolute px-3 md:px-4 py-1 border-2 border-zinc-400 rounded-full left-[20px] md:left-[30px] bottom-[20px] md:bottom-[30px] transition-colors duration-300 ease-out group-hover:bg-zinc-300 group-hover:text-[#212121]' >BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
