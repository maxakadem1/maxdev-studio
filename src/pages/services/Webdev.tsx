import { useEffect, useRef } from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'

export default function Webdev() {
  // FOR VIDEO
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the videoRef is currently being pointed to an element
    if (videoRef.current) {
      // Set the playback rate here. 0.5 is half the normal speed.
      videoRef.current.playbackRate = 1
    }
  }, [])

  return (
    <>
      <div className='z-[1] flex pt-40 w-screen flex-col items-center justify-center bg-black text-white'>
        {/* INTRO */}
        <div className='px-12 flex flex-col items-center gap-5 w-full'>
          <div className='text-6xl font-bold'>WEB DEVELOPMENT</div>
          <div className='w-[50%]'>
            At MAXDEV studio, web development is at our core. We meticulously
            research, organize data, design, and develop to exceed our clients'
            expectations. Our expertise ranges from immersive web development to
            WordPress, and custom solutions, ready to impress even the most
            discerning clients.
          </div>
          <video
            className='w-[50%]'
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src='/GlassBlocksHiRes.mp4' type='video/mp4' />
          </video>
        </div>
        {/* INFO */}
        <div className='flex flex-col items-center gap-5 w-full px-40'>
          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>01</div>
              Immersive Web Experience
            </div>
            <div className='w-[50%]'>
              You have just one chance for a first impression, and you deserve
              the best one. With our skills and know-how, your company or
              product will be presented on a whole new interactive level. Share
              your story through an immersive web presentation and impress your
              website visitors with amazing visualizations, animations, 3D
              design, and a remarkable web experience.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>02</div>
              WordPress Development
            </div>
            <div className='w-[50%]'>
              You have just one chance for a first impression, and you deserve
              the best one. With our skills and know-how, your company or
              product will be presented on a whole new interactive level. Share
              your story through an immersive web presentation and impress your
              website visitors with amazing visualizations, animations, 3D
              design, and a remarkable web experience.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>03</div>
              Custom Web Development
            </div>
            <div className='w-[50%]'>
              You have just one chance for a first impression, and you deserve
              the best one. With our skills and know-how, your company or
              product will be presented on a whole new interactive level. Share
              your story through an immersive web presentation and impress your
              website visitors with amazing visualizations, animations, 3D
              design, and a remarkable web experience.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>04</div>
              Product Development
            </div>
            <div className='w-[50%]'>
              You have just one chance for a first impression, and you deserve
              the best one. With our skills and know-how, your company or
              product will be presented on a whole new interactive level. Share
              your story through an immersive web presentation and impress your
              website visitors with amazing visualizations, animations, 3D
              design, and a remarkable web experience.
            </div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>
        </div>
        {/* tech stack */}
        <div className='flex flex-row justify-between items-center w-full px-40 py-10'>
          <div className='text-sm'>Technologies</div>
          <div className='flex flex-row gap-10 text-7xl'>
            <BiLogoReact />
            <BiLogoJavascript />
            <BiLogoTypescript />
            <FaNodeJs />
          </div>
        </div>
        {/* process */}
        <div className='px-40 py-10 w-full flex flex-row gap-5'>
          <div>text</div>
          <div>text</div>
        </div>
      </div>
    </>
  )
}
