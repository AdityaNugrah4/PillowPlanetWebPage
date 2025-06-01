import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Product from './Components/Product'
import Feature from './Components/Feature'
import About from './Components/About'

function App() {


  return (
    <main className='mainContent'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/feature' element={<Feature />} />
      </Routes>
    </main>
  )
}

export default App