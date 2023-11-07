import { ComponentName } from '@/types'

type NavbarProps = {
  onMenuClick: (componentName: ComponentName) => void
}
export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className='lg:text-sm text-[10px] z-[100] absolute flex items-center justify-center top-[3%] w-full flex-row bg-black text-white px-12 transition duration-300 ease-in-out'>
      <div className='flex flex-row lg:gap-5 gap-3 bg-[#5f5cff1c] rounded-2xl p-3'>
        <button
          onClick={() => onMenuClick('About')}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[20px] lg:w-[100px] w-[60px] rounded-xl'
        >
          About
        </button>
        <button
          onClick={() => onMenuClick('Works')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[20px] lg:w-[100px] w-[60px] rounded-xl'
        >
          Works
        </button>
        <button
          onClick={() => onMenuClick('Home')}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[20px] lg:w-[100px] w-[60px] rounded-xl'
        >
          MAXDEV
        </button>
        <button
          onClick={() => onMenuClick('Process')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[20px] lg:w-[100px] w-[60px] rounded-xl'
        >
          Process
        </button>
        <button
          onClick={() => onMenuClick('Contact')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] lg:h-[40px] h-[20px] lg:w-[100px] w-[60px] rounded-xl'
        >
          Contact
        </button>
      </div>
    </div>
  )
}
