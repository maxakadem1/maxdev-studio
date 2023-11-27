'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react'
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
      setFade({ opacity: 0, config: { duration: 150 } })

      setTimeout(() => {
        setActiveComponent(componentName)
        setFade({ opacity: 1 })
        // Scroll after the fade transition
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 150)
    },
    [setFade]
  )

  useEffect(() => {
    if (activeComponent) {
      // Debugging log
      console.log('Current scroll position before reset:', window.scrollY)

      // Scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' })

      // Debugging log
      setTimeout(
        () => console.log('Scroll position after reset:', window.scrollY),
        100
      )
    }
  }, [activeComponent])

  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <Services onMenuClick={handleMenuClick} />
      case 'Works':
        return <Works />
      case 'Home':
        return <Homepage onMenuClick={handleMenuClick} />
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
        return <Homepage onMenuClick={handleMenuClick} />
    }
  }

  return (
    <>
      <Navbar onMenuClick={handleMenuClick} />
      <animated.div style={fade}>{renderComponent()}</animated.div>
    </>
  )
}
