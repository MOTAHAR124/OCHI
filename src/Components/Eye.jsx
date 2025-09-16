import React, { useEffect, useState } from 'react';

function Eye() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full min-h-screen overflow-hidden'>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed='-0.5'
        className='relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] flex items-center justify-center'
      >
        <div className='relative z-10 flex gap-6 md:gap-10'>
          <div className='flex items-center justify-center w-28 h-28 md:w-[200px] md:h-[200px] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div className='text-[12px] md:text-[18px] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold'>
                PLAY
              </div>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='m-[2px] w-[12px] h-[12px] md:w-[18px] md:h-[18px] rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center w-28 h-28 md:w-[200px] md:h-[200px] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div className='text-[12px] md:text-[18px] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold'>
                PLAY
              </div>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='m-[2px] w-[12px] h-[12px] md:w-[18px] md:h-[18px] rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
