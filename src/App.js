import React, { useEffect } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    Aos.init({duration: 700})
  }, [])
  return (
    <div>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}
