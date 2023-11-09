import { FiArrowUpRight } from 'react-icons/fi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import { useEffect, useRef } from 'react'

export default function Services() {
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
      <div className='flex flex-col justify-end items-end w-full p-20 py-12 gap-4'>
        <div className='lg:text-3xl text-sm'>What we do?</div>
        <div className='flex flex-row items-end gap-2'>
          <div className='text-base text-[#5f5cff]'>we listen to</div>
          <div className='lg:text-8xl text-xl font-bold !leading-[0.8]'>
            YOUR NEEDS
          </div>
        </div>

        <div className='flex flex-row items-end gap-2'>
          <div className='text-base text-[#5f5cff]'>we create</div>
          <div className='lg:text-8xl text-xl font-bold !leading-[0.8]'>
            MUTUAL IDEAS
          </div>
        </div>
        <div className='flex flex-row items-end gap-2'>
          <div className='text-base text-[#5f5cff]'>
            we give you the best of
          </div>
          <div className='lg:text-8xl text-xl font-bold !leading-[0.8]'>
            OUR WORK
          </div>
        </div>
        <div className='flex flex-row items-end gap-2'>
          <div className='text-base text-[#5f5cff]'>and we</div>
          <div className='lg:text-8xl text-xl font-bold !leading-[0.8]'>
            EXCEED
          </div>
        </div>
        <div className='flex flex-row items-end gap-2'>
          <div className='lg:text-8xl text-xl font-bold !leading-[0.8]'>
            YOUR EXPECTATIONS
          </div>
        </div>
      </div>
      <div className='w-full p-20 text-start text-3xl'>
        <div>
          Driven by your needs, we will deliver a digital solution that will
          actually make a difference.
        </div>
      </div>
      {/* MAIN */}
      <div className='w-full px-20'>
        <div className='border border-gray-700 rounded-lg w-full'>
          {/* ELEMENT 1 */}
          <div className='flex flex-row p-20'>
            <div className='flex flex-col gap-8 w-[50%] items-start justify-center'>
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
              <button className='text-sm w-[50%] bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
                <span>Learn More</span>
                <FiArrowUpRight className='text-xl' />
              </button>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
              <video ref={videoRef} autoPlay loop muted playsInline>
                <source src='/GlassBlocksHiRes.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='mx-20 '>
            <hr className=' border-gray-700' />
          </div>

          {/* ELEMENT 2 */}
          <div className='flex flex-row p-20'>
            <div className='flex flex-col gap-8 w-[50%] items-start justify-center'>
              <div className='lg:text-5xl text-xl font-bold'>UI/UX DESIGN</div>
              <div>
                What distinguishes an ineffective webpage from a lead-generating
                powerhouse? The key is in superior UI and user-friendly,
                data-driven UX design. Our approach to success is simple yet
                unconventional: we don't stick to the standard rules. Let us
                deliver striking visuals and exceptional usability for your next
                website.
              </div>
              <button className='text-sm w-[50%] bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
                <span>Learn More</span>
                <FiArrowUpRight className='text-xl' />
              </button>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
              <video ref={videoRef} autoPlay loop muted playsInline>
                <source src='/glassDonuts.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='mx-20 '>
            <hr className=' border-gray-700' />
          </div>

          {/* ELEMENT 3 */}
          <div className='flex flex-row p-20'>
            <div className='flex flex-col gap-8 w-[50%] items-start justify-center'>
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
              <button className='text-sm w-[50%] bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
                <span>Learn More</span>
                <FiArrowUpRight className='text-xl' />
              </button>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
              <video ref={videoRef} autoPlay loop muted playsInline>
                <source src='/MAXDEV.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='h-screen flex items-center justify-center px-20'>
        <div className='flex flex-row w-full'>
          <div className='w-[50%]'>
            <div className='text-7xl font-semibold'>
              LET'S CREATE TOMORROW TODAY.
            </div>
          </div>
          <div className='w-[50%] z-10 flex flex-col gap-5 text-sm p-8 justify-start items-start'>
            <div className='flex flex-col gap-3 items-start justify-start w-full'>
              <button className='w-full bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
                <span>START A PROJECT</span>
                <FiArrowUpRight className='text-xl' />
              </button>
              <button className='w-full bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
                <span>CONTACT US</span>
                <FiArrowUpRight className='text-xl' />
              </button>
              <button className='w-full bg-[#5f5cff73] hover:bg-[#5f5cffb6] flex flex-row items-center justify-between gap-2 p-3 rounded-xl transition duration-300 ease-in-out'>
                <span>SCHEDULE A MEETING</span>
                <FiArrowUpRight className='text-xl' />
              </button>
            </div>

            <div className='flex flex-row gap-2 justify-start'>
              <button>
                <BiLogoLinkedin className='text-2xl' />
              </button>
              <button>
                <AiFillInstagram className='text-2xl' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full text-start px-20 text-[10px] py-4'>
        © MAXDEV studio 2023. All Rights Reserved
      </div>
    </div>
  )
}
