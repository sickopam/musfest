import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Merchandise from './Pages/Merchandise'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    Aos.init({duration: 700})
  }, [])
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/merchandise' element={<Merchandise/>}/>
        </Routes>
      </Router>
      {/* <Home/> */}
    </div>
  )
}
