import React from 'react'

function About() {
  return (   
    
      <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className=" flex gap-5 font-['Neue_Montreal'] w-full border-t-[1px] pt-4 mt-4 mb-20 border-[#373931]">
              <div className="text-[18px] expect w-1/2 h-50vh"><p>What you can expect:</p></div>
              <div className="flex tailor w-1/2">
                <div className="text-[18px] w-[40%] ">
                   <p>
                     We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
                   </p>
                   <p className='pt-4 mt-4'>
                     We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                   </p>
                </div>
                  <div className="w-[50%] pl-[150px] pt-[50px]">   
                     <div className="block text-xl mb-8 mt-8">S:</div>
                     <div className="dets font-['Neue_Montreal'] mt-10">
                         <a className='underline block text-l font-light' href="">Facebook</a>
                         <a className='underline block text-l font-light' href="">Instagram</a>
                         <a className='underline block text-l font-light' href="">Twitter</a>
                         <a className='underline block text-l font-light' href="">Linkedin</a>
                     </div>                         
                </div>               
              </div>
            </div>
            <div className="flex gap-5 w-full border-t-[1px] pt-10 mt-10 border-[#373931] ">
                <div className="w-1/2">
                    <h1 className='text-6xl'>Our approach:</h1>
                      <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white '>READ MORE
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>              
                      </button>
               </div>
               <div className="w-1/2 h-[60vh] ">
                  <img className= 'rounded-3xl'src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
               </div>
            </div>
      </div>
  )
}


export default About
