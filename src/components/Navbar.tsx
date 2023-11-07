import { ComponentName } from '@/types'
import Image from 'next/image'

type NavbarProps = {
  onMenuClick: (componentName: ComponentName) => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className='lg:text-sm text-[10px] z-[100] absolute flex flex-row items-center justify-between top-[3%] w-full bg-black text-white px-12'>
      {/* <div className='flex flex-row lg:gap-5 gap-3 bg-[#5f5cff1c] lg:rounded-2xl rounded-lg p-3'>
        <button
          onClick={() => onMenuClick('About')}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[25px] lg:w-[100px] w-[60px] lg:rounded-xl rounded-md'
        >
          About
        </button>
        <button
          onClick={() => onMenuClick('Works')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[25px] lg:w-[100px] w-[60px] lg:rounded-xl rounded-md'
        >
          Works
        </button>
        <button
          onClick={() => onMenuClick('Home')}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[25px] lg:w-[100px] w-[60px] lg:rounded-xl rounded-md'
        >
          MAXDEV
        </button>
        <button
          onClick={() => onMenuClick('Process')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[25px] lg:w-[100px] w-[60px] lg:rounded-xl rounded-md'
        >
          Process
        </button>
        <button
          onClick={() => onMenuClick('Contact')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[25px] lg:w-[100px] w-[60px] lg:rounded-xl rounded-md'
        >
          Contact
        </button>
      </div> */}
      <button
        onClick={() => onMenuClick('Home')}
        className='flex flex-row gap-2 items-center justify-center'
      >
        <Image src='/MAXDEV.svg' alt='Logo' width={50} height={50} />
        <div className='flex flex-col items-start justify-start'>
          <div className='text-md font-bold'>MAXDEV</div>
          <div className='text-[12px] leading-3 text-gray-500'>web studio</div>
        </div>
      </button>

      <div className='flex flex-row gap-4'>
        <button
          onClick={() => onMenuClick('About')}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:text-[#3836b4]'
        >
          About
        </button>
        <button
          onClick={() => onMenuClick('Works')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:text-[#3836b4]'
        >
          Works
        </button>

        <button
          onClick={() => onMenuClick('Process')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:text-[#3836b4]'
        >
          Process
        </button>
        <button
          onClick={() => onMenuClick('Contact')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:text-[#3836b4]'
        >
          Contact
        </button>
      </div>
    </div>
  )
}
