'use client'
import '../../app/glitch.sass'
import { useRef, useEffect } from 'react'

export default function Homepage() {
  // FOR VIDEO
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the videoRef is currently being pointed to an element
    if (videoRef.current) {
      // Set the playback rate here. 0.5 is half the normal speed.
      videoRef.current.playbackRate = 0.6
    }
  }, [])

  return (
    <div className='z-[1] flex h-[100vh] w-[100vw] flex-col items-center bg-black text-white'>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='absolute z-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80vw] h-[80vh]'
      >
        <source src='/MAXDEV.mp4' type='video/mp4' />
      </video>
      {/* <div className='wrapper absolute top-[78%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className='text-5xl font-light glitch'>studio</h1>
      </div> */}
      <div className='absolute top-[78%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className='lg:text-3xl text-xl font-light glitch'>
          WebDev / UI / UX
        </h1>
      </div>

      <div className='absolute top-[82%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className='lg:text-3xl text-xl font-light glitch'>studio</h1>
      </div>
      {/* <div className='text-2xl text-[#FF002E] tracking-[0.5rem]'>STUDIO</div> */}
    </div>
  )
}
