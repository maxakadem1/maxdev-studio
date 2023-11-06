import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='text-sm z-[100] absolute flex items-center justify-center h-[120px] w-full flex-row bg-black text-white px-12 transition duration-300 ease-in-out'>
      <div className='flex flex-row gap-5 bg-[#5f5cff1c] rounded-2xl p-3'>
        <Link
          href={'/About'}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'
        >
          About
        </Link>
        <button className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'>
          Works
        </button>
        <button className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'>
          MAXDEV
        </button>
        <button className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'>
          Process
        </button>
        <button className='flex items-center justify-center  transition duration-300 ease-in-out hover:bg-[#3836b4] h-[40px] w-[100px] rounded-xl'>
          Contact
        </button>
      </div>
    </div>
  )
}
