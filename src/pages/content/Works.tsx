import Footer from '@/components/Footer'
import { useEffect, useRef } from 'react'

export default function Works() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the videoRef is currently being pointed to an element
    if (videoRef.current) {
      // Set the playback rate here. 0.5 is half the normal speed.
      videoRef.current.playbackRate = 0.6
    }
  }, [])

  return (
    <div className='z-[1] flex pt-32 w-screen flex-col items-center justify-center bg-black text-white'>
      <div className='w-[50%] flex items-start justify-center flex-col gap-6'>
        <div className='text-6xl font-bold'>FEATURED WORK</div>
        <div>
          With a proven track record spanning diverse industries, we excel in
          serving clients across the world. Our expertise transcends boundaries,
          allowing us to adapt and excel in any industry. With our deep
          understanding of various sectors, we bring valuable insights and
          tailored solutions to every project.
        </div>
      </div>
      {/* CARDs */}
      <div className='pt-16 w-full px-20 flex justify-center'>
        {/* card 1 */}
        <div className=' p-5 rounded-lg flex flex-col justify-between items-center w-[25%] h-[450px] relative'>
          {/* Pseudo-element for background image with reduced opacity */}
          <div
            className='absolute inset-0 rounded-xl'
            style={{
              backgroundImage: "url('/img/outreachGenius.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4,
            }}
          ></div>

          {/* Ensuring content is above the background image */}
          <div className='relative z-10 text-[11px]'>Current Client</div>
          <div className='relative z-10 text-2xl font-bold'>
            OUTREACH GENIUS
          </div>
          <div className='relative z-10 text-[11px] text-center'>
            User Interface Design, User Experience Design, Front-End
            Development, Back End Development, Support and Maintenance
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}
