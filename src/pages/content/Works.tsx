import Footer from '@/components/Footer'
import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

export default function Works() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if the videoRef is currently being pointed to an element
    if (videoRef.current) {
      // Set the playback rate here. 0.5 is half the normal speed.
      videoRef.current.playbackRate = 0.6
    }

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='z-[1] flex pt-32 w-screen flex-col items-center justify-center bg-black text-white'>
      <div className='lg:w-[50%] w-full flex items-start justify-center flex-col gap-6 px-8'>
        <div className='lg:text-6xl text-3xl font-bold text-center'>
          FEATURED WORK
        </div>
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
        <div className=' p-5 rounded-lg flex flex-col justify-between items-center lg:w-[25%] w-full h-[450px] relative'>
          {/* Pseudo-element for background image with reduced opacity */}
          <div
            className='absolute inset-0 rounded-xl'
            style={{
              backgroundImage: "url('/img/OutreachG.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4,
            }}
          ></div>

          <div className='relative z-10 text-[11px]'>Current Client</div>
          <div className='relative z-10 text-2xl font-bold text-center'>
            OUTREACH GENIUS
          </div>
          <div className='relative z-10 text-[11px] text-center'>
            User Interface Design, User Experience Design, Front-End
            Development, Back End Development, Support and Maintenance
          </div>
        </div>
      </div>
      <div className='m-20'>
        <button className='text-sm w-full border border-[#5f5cff73] shadow-[#5f5cff73] shadow-custom-button  hover:bg-[#13133a] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
          <span>Start a Project</span>
          <FiArrowUpRight className='text-xl' />
        </button>
      </div>
      <div className='w-full lg:px-20 px-4'>
        <span className='w-full flex items-center justify-center lg:text-6xl text-3xl font-bold text-center'>
          OTHER PROJECTS
        </span>
        {/* project 1 */}
        {windowWidth > 1028 ? (
          <>
            <Link
              href='https://outreachgenius.ai/'
              target='_blank'
              className='flex flex-row lg:text-base text-sm w-full justify-between my-10 text-gray-400 hover:text-white cursor-pointer'
            >
              <div>01</div>
              <div>Simple Foods Inc</div>
              <div>Custom Development, Front End, Back End</div>
              <div>2022</div>
              <div>
                <FaArrowRight />
              </div>
            </Link>
            <Link
              href='https://www.linkedin.com/company/simple-foods-inc/'
              target='_blank'
              className='flex flex-row lg:text-base text-sm w-full justify-between my-10 text-gray-400 hover:text-white cursor-pointer'
            >
              <div>02</div>
              <div>Outreach Genius</div>
              <div>Custom Web Development, UI/UX Design</div>
              <div>2023</div>
              <div>
                <FaArrowRight />
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link
              href='https://www.linkedin.com/company/simple-foods-inc/'
              target='_blank'
              className='flex flex-col w-full gap-1  justify-between my-20 text-gray-400 hover:text-white cursor-pointer'
            >
              <div className='flex flex-row justify-between items-center '>
                <div className='flex flex-row gap-5'>
                  <div>01</div>
                  <div>Simple Foods Inc</div>
                </div>
                <div className='flex flex-row  gap-3 justify-center items-center h-full'>
                  <div className=''>2022</div>
                  <FaArrowRight className='flex justify-center items-center h-full' />
                </div>
              </div>

              <div className='text-[12px]'>
                Custom Development, Front End, Back End
              </div>
            </Link>
            <Link
              href='https://outreachgenius.ai/'
              target='_blank'
              className='flex flex-col w-full gap-1  justify-between my-20 text-gray-400 hover:text-white cursor-pointer'
            >
              <div className='flex flex-row justify-between items-center '>
                <div className='flex flex-row gap-5'>
                  <div>02</div>
                  <div>Outreach Genius</div>
                </div>
                <div className='flex flex-row  gap-3 justify-center items-center h-full'>
                  <div className=''>2023</div>
                  <FaArrowRight className='flex justify-center items-center h-full' />
                </div>
              </div>

              <div className='text-[12px]'>
                Custom Web Development, UI/UX Design
              </div>
            </Link>
          </>
        )}
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}
