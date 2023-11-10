import { FiArrowUpRight } from 'react-icons/fi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <>
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
    </>
  )
}
