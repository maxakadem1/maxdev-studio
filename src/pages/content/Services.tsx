import { FiArrowUpRight } from 'react-icons/fi'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ComponentName } from '@/types'
import Footer from '@/components/Footer'

type ServicesProps = {
  onMenuClick: (componentName: ComponentName) => void
}

export default function Services({ onMenuClick }: ServicesProps) {
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
    <div className='z-[1] flex pt-32 w-screen flex-col items-center justify-center bg-black text-white'>
      {/* HEAD */}
      <div className='flex flex-col lg:justify-end lg:items-end justify-center items-center w-full lg:p-20 p-10 py-12 gap-4'>
        <div className='lg:text-3xl text-2xl'>What we do?</div>
        <div className='flex lg:flex-row flex-col lg:items-end items-center gap-2'>
          <div className='text-base text-[#5f5cff]'>we listen to</div>
          <div className='lg:text-8xl text-4xl font-bold !leading-[0.8]'>
            YOUR NEEDS
          </div>
        </div>

        <div className='flex lg:flex-row flex-col lg:items-end items-center gap-2'>
          <div className='text-base text-[#5f5cff]'>we create</div>
          <div className='lg:text-8xl text-4xl font-bold !leading-[0.8]'>
            MUTUAL IDEAS
          </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:items-end items-center gap-2'>
          <div className='text-base text-[#5f5cff]'>
            we give you the best of
          </div>
          <div className='lg:text-8xl text-4xl font-bold !leading-[0.8]'>
            OUR WORK
          </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:items-end items-center gap-2'>
          <div className='text-base text-[#5f5cff]'>and we</div>
          <div className='lg:text-8xl text-4xl font-bold !leading-[0.8]'>
            EXCEED
          </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:items-end items-center gap-2'>
          <div className='lg:text-8xl text-4xl font-bold !leading-[0.8] lg:text-right text-center'>
            YOUR EXPECTATIONS
          </div>
        </div>
      </div>
      <div className='w-full lg:p-20 p-5 text-start lg:text-3xl text-2xl'>
        <div>
          Driven by your needs, we will deliver a digital solution that will
          actually make a difference.
        </div>
      </div>
      {/* MAIN */}
      <div className='w-full lg:px-20 px-3 lg:py-0 py-10'>
        <div className='border border-gray-700 rounded-lg w-full'>
          {/* ELEMENT 1 */}
          <div className='flex lg:flex-row flex-col-reverse lg:p-20 p-5'>
            <div className='flex flex-col gap-8 lg:w-[50%] w-full items-start justify-center'>
              <div className='lg:text-5xl text-xl font-bold'>
                WEB/E-COMMERCE DEVELOPMENT
              </div>
              <div>
                Being online is no longer sufficient. To stand out and be
                noticed, you need to make an impact. MAXDEV is here to help you
                achieve that. Our expertise ranges from building straightforward
                websites to developing intricate, immersive web platforms
                tailored to your requirements. As technology advances, we too
                adapt and innovate, preparing you to elevate your online
                presence to new heights.
              </div>
              <button
                onClick={() => onMenuClick('Webdev')}
                className='text-sm w-[50%] border border-[#5f5cff73] shadow-[#5f5cff73] shadow-custom-button  hover:bg-[#13133a] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'
              >
                <span>Learn More</span>
                <FiArrowUpRight className='text-xl' />
              </button>
            </div>
            <div className='lg:w-[50%] w-full flex items-center justify-center'>
              <video ref={videoRef} autoPlay loop muted playsInline>
                <source src='/GlassBlocksHiRes.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='lg:mx-20 mx-5'>
            <hr className=' border-gray-700' />
          </div>

          {/* ELEMENT 2 */}
          <div className='flex lg:flex-row flex-col-reverse lg:p-20 p-5'>
            <div className='flex flex-col gap-8 lg:w-[50%] w-full items-start justify-center'>
              <div className='lg:text-5xl text-xl font-bold'>UI/UX DESIGN</div>
              <div>
                What distinguishes an ineffective webpage from a lead-generating
                powerhouse? The key is in superior UI and user-friendly,
                data-driven UX design. Our approach to success is simple yet
                unconventional: we don't stick to the standard rules. Let us
                deliver striking visuals and exceptional usability for your next
                website.
              </div>
              <button className='text-sm w-[50%] border border-[#5f5cff73] shadow-[#5f5cff73] shadow-custom-button  hover:bg-[#13133a] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
                <span>Learn More</span>
                <FiArrowUpRight className='text-xl' />
              </button>
            </div>
            <div className='lg:w-[50%] w-full flex items-center justify-center'>
              <video ref={videoRef} autoPlay loop muted playsInline>
                <source src='/glassDonuts.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='lg:mx-20 mx-5'>
            <hr className=' border-gray-700' />
          </div>

          {/* ELEMENT 3 */}
          <div className='flex lg:flex-row flex-col-reverse lg:p-20 p-5'>
            <div className='flex flex-col gap-8 lg:w-[50%] w-full items-start justify-center'>
              <div className='lg:text-5xl text-xl font-bold'>
                STRATEGY AND SUPPORT
              </div>
              <div>
                Our goal is clear: we live to create the perfect digital
                product. So, our solutions and designs are oriented towards its
                majesty – the user. Thus, we research, study user behaviors and
                habits, organize data, and develop strategies. At the same time,
                our professionals are always here to provide help and support.
              </div>
              <button className='text-sm w-[50%] border border-[#5f5cff73] shadow-[#5f5cff73] shadow-custom-button  hover:bg-[#13133a] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
                <span>Learn More</span>
                <FiArrowUpRight className='text-xl' />
              </button>
            </div>
            <div className='lg:w-[50%] w-full flex items-center justify-center'>
              <video ref={videoRef} autoPlay loop muted playsInline>
                <source src='/MAXDEV.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
