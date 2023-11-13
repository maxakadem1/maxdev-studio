import { ComponentName } from '@/types'

import Image from 'next/image'

type NavbarProps = {
  onMenuClick: (componentName: ComponentName) => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className='lg:text-sm text-[10px] z-[10] absolute flex flex-row items-center justify-between top-[3%] w-full text-white lg:px-12 px-5'>
      <div className='flex flex-row justify-between items-center w-full backdrop-blur-3xl px-5 py-2 rounded-3xl'>
        <button
          onClick={() => onMenuClick('Home')}
          className='flex flex-row gap-2 items-center justify-center'
        >
          <div className='lg:pr-0 pr-5'>
            <Image src='/MAXDEV.svg' alt='Logo' width={50} height={50} />
          </div>

          <div className='flex-col items-start justify-start lg:flex hidden'>
            <div className='text-md font-bold'>MAXDEV</div>
            <div className='text-[12px] leading-3 text-gray-500'>
              web studio
            </div>
          </div>
        </button>

        <div className='flex flex-row gap-5 font-light'>
          <button
            onClick={() => onMenuClick('About')}
            className=' flex items-center justify-center transition duration-300 ease-in-out hover:text-[#5f5cff]'
          >
            Services
          </button>
          <button
            onClick={() => onMenuClick('Works')}
            className=' flex items-center justify-center  transition duration-300 ease-in-out hover:text-[#5f5cff]'
          >
            Work
          </button>

          <button
            onClick={() => onMenuClick('Contact')}
            className=' flex items-center justify-center transition duration-300 ease-in-out hover:text-[#5f5cff]'
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
