import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-12 gap-5'>
        <div className="cardContainer h-[55vh] w-1/2">
            <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
                <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='text-[#C9E767] absolute px-4 py-1 border-2 border-[#C9E767] rounded-full left-[30px] bottom-[30px]' >©2019-2022</button>
            </div>

        </div>

        <div className="cardContainer flex gap-5 h-[55vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]">
                <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className=' text-zinc-300 absolute px-4 py-1 border-2 rounded-full left-[30px] bottom-[30px]' >RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]">
                <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className=' text-zinc-300 absolute px-4 py-1 border-2 rounded-full left-[30px] bottom-[30px]' >BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
