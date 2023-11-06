'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Homepage from './content/Homepage'
import About from './content/About'
import Works from './content/Works'
import { ComponentName } from '@/types'
import Process from './content/Process'
import Contact from './content/Contact'

export default function Main() {
  const [activeComponent, setActiveComponent] = useState<ComponentName>('Home') // default component

  const handleMenuClick = (componentName: ComponentName) => {
    setActiveComponent(componentName)
  }

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
      {renderComponent()}
    </>
  )
}
