import Footer from '@/components/Footer'
import { useEffect, useRef } from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'

export default function Strategy() {
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
          <div className='text-6xl font-bold'>STRATEGY AND SUPPORT</div>
          <div className='w-[50%]'>
            The necessity of a brand strategy is indisputable. With our
            assistance, your business is set to flourish. Whether it's hosting
            guidance, a straightforward consultation, brand strategy, or product
            development, we've got you covered. Additionally, our expertise
            extends to SEO, DevOps, market research, web audits, and competitive
            analysis. Our extensive knowledge is matched only by our eagerness
            to aid in your growth.
          </div>
          <video
            className='w-[50%]'
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src='/MAXDEV.mp4' type='video/mp4' />
          </video>
        </div>
        {/* INFO */}
        <div className='flex flex-col items-center gap-5 w-full px-40'>
          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>01</div>
              Technical Support
            </div>
            <div className='w-[50%]'>text</div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>02</div>
              Web Audit
            </div>
            <div className='w-[50%]'>text</div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>03</div>
              SEO Audit
            </div>
            <div className='w-[50%]'>text</div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>04</div>
              Dev Ops
            </div>
            <div className='w-[50%]'>text</div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>05</div>
              Hosting and Support
            </div>
            <div className='w-[50%]'>text</div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>06</div>
              Go To Market Web Strategy
            </div>
            <div className='w-[50%]'>text</div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>

          <div className='flex flex-row gap-20 w-full items-center'>
            <div className='w-[50%] text-3xl font-semibold'>
              <div className='text-sm font-normal text-gray-700'>07</div>
              Consulting
            </div>
            <div className='w-[50%]'>text</div>
          </div>

          <div className='m-20 w-full'>
            <hr className=' border-gray-700' />
          </div>
        </div>

        {/* process */}
        <div className='px-20 py-10 w-full flex flex-row gap-5'>
          <div className='rounded-lg p-6 w-[30%] bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>01</div>
            <div className='text-3xl'>Discovery process</div>
            <div className='text-[12px] font-light'>
              First, pinpoint and articulate the issue at hand. Gather pertinent
              data and information concerning the problem. This step may include
              undertaking research and scrutinizing any available data.
            </div>
          </div>
          <div className='rounded-lg p-6 w-[30%] bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>02</div>
            <div className='text-3xl'>Analyzing problem</div>
            <div className='text-[12px] font-light'>
              Examine and evaluate the collected information to derive
              understanding of the problem. Search for recurring themes,
              underlying causes, and possible connections.
            </div>
          </div>
          <div className='rounded-lg p-6 w-[30%] bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>03</div>
            <div className='text-3xl'>Problem solving</div>
            <div className='text-[12px] font-light'>
              Engage in brainstorming to create a variety of possible solutions
              for the problem. Select the one that appears most effective in
              resolving the issue.
            </div>
          </div>
          <div className='rounded-lg p-6 w-[30%] bg-[#13133a] flex flex-col gap-7'>
            <div className='text-7xl text-[#7c7cff] font-semibold'>04</div>
            <div className='text-3xl'>Monitoring and Modifications</div>
            <div className='text-[12px] font-light'>
              Monitor the execution of the chosen solution and observe its
              development. Evaluate its success and make necessary modifications
              as needed.
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  )
}
