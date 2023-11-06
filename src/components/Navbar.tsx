import { ComponentName } from '@/types'

type NavbarProps = {
  onMenuClick: (componentName: ComponentName) => void
}
export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className='text-sm z-[100] absolute flex items-center justify-center h-[120px] w-full flex-row bg-black text-white px-12 transition duration-300 ease-in-out'>
      <div className='flex flex-row gap-5 bg-[#5f5cff1c] rounded-2xl p-3'>
        <button
          onClick={() => onMenuClick('About')}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'
        >
          About
        </button>
        <button
          onClick={() => onMenuClick('Works')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'
        >
          Works
        </button>
        <button
          onClick={() => onMenuClick('Home')}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'
        >
          MAXDEV
        </button>
        <button
          onClick={() => onMenuClick('Process')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'
        >
          Process
        </button>
        <button
          onClick={() => onMenuClick('Contact')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'
        >
          Contact
        </button>
      </div>
    </div>
  )
}
