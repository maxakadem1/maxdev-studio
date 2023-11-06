export default function Navbar() {
  return (
    <div className='text-sm z-[100] absolute flex items-center justify-center h-[120px] w-full flex-row bg-black text-white px-12 '>
      <div className='flex flex-row gap-5 bg-[#5f5cff1c] rounded-2xl p-3'>
        <button className=' hover:bg-[#3836b4] h-[45px] w-[100px] rounded-xl'>
          MAXDEV
        </button>
        <button className=' hover:bg-[#3836b4] h-[45px] w-[100px] rounded-xl'>
          About
        </button>
        <button className=' hover:bg-[#3836b4] h-[45px] w-[100px] rounded-xl'>
          Works
        </button>
        <button className=' hover:bg-[#3836b4] h-[45px] w-[100px] rounded-xl'>
          Process
        </button>
        <button className=' hover:bg-[#3836b4] h-[45px] w-[100px] rounded-xl'>
          Contact
        </button>
      </div>
    </div>
  )
}
