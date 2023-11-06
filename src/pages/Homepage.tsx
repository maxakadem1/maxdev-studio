'use client'
import '../app/glitch.sass'
import { useRef, useState, useEffect } from 'react'
import { useSpring, animated, config } from '@react-spring/web'

export default function Homepage() {
  // FOR VIDEO
  const video = '/public/MAXDEV.mp4'
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the videoRef is currently being pointed to an element
    if (videoRef.current) {
      // Set the playback rate here; 0.5 is half the normal speed.
      videoRef.current.playbackRate = 0.6
    }
  }, [])

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white'>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full object-cover'
      >
        <source src='/MAXDEV.mp4' type='video/mp4' />
      </video>
      {/* <div className='wrapper '>
        <h1 className='text-9xl font-semibold glitch'>MAXDEV</h1>
      </div> */}

      <div className='text-2xl text-[#FF002E] tracking-[0.5rem]'>STUDIO</div>
    </div>
  )
}
