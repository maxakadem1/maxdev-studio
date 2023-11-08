import { useEffect, useRef } from 'react'

export default function Process() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the videoRef is currently being pointed to an element
    if (videoRef.current) {
      // Set the playback rate here. 0.5 is half the normal speed.
      videoRef.current.playbackRate = 0.6
    }
  }, [])

  return (
    <div className='z-[1] flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black text-white'>
      Process
      <div>-</div>
      <div>under construction</div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='absolute z-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80vw] h-[80vh] opacity-50 blur-xl'
      >
        <source src='/MAXDEV.mp4' type='video/mp4' />
      </video>
    </div>
  )
}
