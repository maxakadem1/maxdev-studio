import { ComponentName } from '@/types'

type NavbarProps = {
  onMenuClick: (componentName: ComponentName) => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className='lg:text-sm text-[10px] z-[100] absolute flex items-center justify-center top-[3%] w-full bg-black text-white px-12'>
      <div className='flex flex-row lg:gap-5 gap-3 bg-[#5f5cff1c] lg:rounded-2xl rounded-lg p-3'>
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
      </div>
    </div>
  )
}
