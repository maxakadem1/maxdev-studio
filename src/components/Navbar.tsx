import { ComponentName } from '@/types'
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import Image from 'next/image'

type NavbarProps = {
  onMenuClick: (componentName: ComponentName) => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [show, setShow] = useState(true)
  const [lastYPos, setLastYPos] = useState(0)

  const navbarAnimation = useSpring({
    transform: show ? 'translateY(0)' : 'translateY(-100%)',
    config: { tension: 350, friction: 30 },
  })

  useEffect(() => {
    function handleScroll() {
      console.log('Scrolling...') // For debugging
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYPos

      setShow(isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos])

  return (
    <animated.div
      style={navbarAnimation}
      className='lg:text-sm text-[10px] z-[100] absolute flex flex-row items-center justify-between top-[3%] w-full text-white px-8'
    >
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

      <div className='flex flex-row gap-5 font-light'>
        <button
          onClick={() => onMenuClick('About')}
          className='flex items-center justify-center transition duration-300 ease-in-out hover:text-[#5f5cff]'
        >
          Services
        </button>
        <button
          onClick={() => onMenuClick('Works')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:text-[#5f5cff]'
        >
          Works
        </button>

        <button
          onClick={() => onMenuClick('Process')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:text-[#5f5cff]'
        >
          Process
        </button>
        <button
          onClick={() => onMenuClick('Contact')}
          className='flex items-center justify-center  transition duration-300 ease-in-out hover:text-[#5f5cff]'
        >
          Contact
        </button>
      </div>
    </animated.div>
  )
}
