import { FiArrowUpRight } from 'react-icons/fi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'

export default function Services() {
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
            <div className='flex flex-col gap-8 w-[50%] items-start'>
              <div className='lg:text-5xl text-xl font-bold'>
                WEB DEVELOPMENT
              </div>
              <div>
                Being present online is not enough anymore. You must leave your
                mark if you want to be seen and heard. And that’s where MAXDEV
                comes in. We are experienced and capable of creating a simple
                website or a complex immersive web platform for your needs.
                Technology evolves, but so do we. Ready to take the game to the
                next level?
              </div>
              <button>learn more</button>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
              image here
            </div>
          </div>

          <div className='mx-20 '>
            <hr className=' border-gray-700' />
          </div>

          {/* ELEMENT 2 */}
          <div className='flex flex-row p-20'>
            <div className='flex flex-col gap-8 w-[50%] items-start'>
              <div className='lg:text-5xl text-xl font-bold'>
                WEB DEVELOPMENT
              </div>
              <div>
                Being present online is not enough anymore. You must leave your
                mark if you want to be seen and heard. And that’s where MAXDEV
                comes in. We are experienced and capable of creating a simple
                website or a complex immersive web platform for your needs.
                Technology evolves, but so do we. Ready to take the game to the
                next level?
              </div>
              <button>learn more</button>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
              image here
            </div>
          </div>

          <div className='mx-20 '>
            <hr className=' border-gray-700' />
          </div>

          {/* ELEMENT 3 */}
          <div className='flex flex-row p-20'>
            <div className='flex flex-col gap-8 w-[50%] items-start'>
              <div className='lg:text-5xl text-xl font-bold'>
                WEB DEVELOPMENT
              </div>
              <div>
                Being present online is not enough anymore. You must leave your
                mark if you want to be seen and heard. And that’s where MAXDEV
                comes in. We are experienced and capable of creating a simple
                website or a complex immersive web platform for your needs.
                Technology evolves, but so do we. Ready to take the game to the
                next level?
              </div>
              <button>learn more</button>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
              image here
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
