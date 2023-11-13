'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '@/components/Navbar'
import Homepage from './content/Homepage'
import Services from './content/Services'
import Works from './content/Works'
import { ComponentName } from '@/types'
import Process from './content/Process'
import Contact from './content/Contact'
import { useSpring, animated, config } from '@react-spring/web'
import Webdev from './services/Webdev'
import UserInterface from './services/UserInterface'
import Strategy from './services/Strategy'

export default function Main() {
  const [activeComponent, setActiveComponent] = useState<ComponentName>('Home')

  const [fade, setFade] = useSpring(() => ({
    opacity: 1,
    config: { duration: 300 }, // adjust the duration for a faster or slower transition
  }))

  const handleMenuClick = useCallback(
    (componentName: ComponentName) => {
      // Fade out quickly
      setFade({ opacity: 0, config: { duration: 150 } })

      // Change component after a slight delay
      setTimeout(() => {
        setActiveComponent(componentName)
        // Fade back in
        setFade({ opacity: 1 })
      }, 150) // Delay should match the fade out duration
    },
    [setFade]
  )

  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <Services onMenuClick={handleMenuClick} />
      case 'Works':
        return <Works />
      case 'Home':
        return <Homepage />
      case 'Process':
        return <Process />
      case 'Contact':
        return <Contact />
      case 'Webdev':
        return <Webdev />
      case 'UserInterface':
        return <UserInterface />
      case 'Strategy':
        return <Strategy />
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
