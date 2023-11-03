import '../app/glitch.sass'

export default function Homepage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white'>
      <div className='wrapper '>
        <h1 className='text-9xl font-semibold glitch'>MAXDEV</h1>
      </div>

      <div className='text-2xl text-[#FF002E] tracking-[0.5rem]'>STUDIO</div>
    </div>
  )
}
