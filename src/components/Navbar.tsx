export default function Navbar() {
  return (
    <div className='z-[100] absolute flex items-center justify-between h-24 w-full flex-row bg-black text-white px-12'>
      <button className='hover:text-[#5f5cff] tracking-[0.2rem]'>MENU</button>
      <button className='hover:text-[#5f5cff] tracking-[0.2rem]'>MAXDEV</button>
      <button className='hover:text-[#5f5cff] tracking-[0.2rem]'>
        CONTACT
      </button>
    </div>
  )
}
