'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Homepage from './content/Homepage'
import About from './content/About'
import Works from './content/Works'
import { ComponentName } from '@/types'
import Process from './content/Process'
import Contact from './content/Contact'
import { useSpring, animated, config } from '@react-spring/web'

export default function Main() {
  const [activeComponent, setActiveComponent] = useState<ComponentName>('Home') // default component

  const handleMenuClick = (componentName: ComponentName) => {
    setActiveComponent(componentName)
  }

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    config: { duration: 500 }, // adjust duration to control speed of transition
  })

  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <About />
      case 'Works':
        return <Works />
      case 'Home':
        return <Homepage />
      case 'Process':
        return <Process />
      case 'Contact':
        return <Contact />
      default:
        return <Homepage />
    }
  }

  return (
    <>
      <Navbar onMenuClick={handleMenuClick} />
      <animated.div style={fade}>{renderComponent()}</animated.div>
    </>
  )
}
