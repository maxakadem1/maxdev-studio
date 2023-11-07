import { useRef, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the videoRef is currently being pointed to an element
    if (videoRef.current) {
      // Set the playback rate here. 0.5 is half the normal speed.
      videoRef.current.playbackRate = 0.6
    }
  }, [])

  return (
    <div className='z-[1] flex gap-8 h-[100vh] w-[100vw] flex-col items-center justify-center bg-black text-white'>
      <div className='z-10 flex flex-col items-center justify-center font-bold gap-2 lg:text-center text-start px-8'>
        <div className='text-5xl w-full'>LETS CREATE TOMORROW</div>
        <div className='text-7xl w-full'>TODAY</div>
      </div>
      <div className='z-10 flex lg:flex-row flex-col gap-5 text-sm w-full p-8 lg:justify-center justify-start'>
        <button className='bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center lg:justify-start justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
          <span>START A PROJECT</span>
          <FiArrowUpRight className='text-xl' />
        </button>
        <button className='bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center lg:justify-start justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
          <span>CONTACT US</span>
          <FiArrowUpRight className='text-xl' />
        </button>
        <button className='bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center lg:justify-start justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
          <span>SCHEDULE A MEETING</span>
          <FiArrowUpRight className='text-xl' />
        </button>
      </div>

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] opacity-50 blur-xl'
      >
        <source src='/MAXDEV.mp4' type='video/mp4' />
      </video>
    </div>
  )
}
