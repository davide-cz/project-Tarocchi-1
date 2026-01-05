import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import TarotPage from './components/TarotPage'
import SingleTarot from './components/SingleTarot'
import Home from './components/Home'

function App() {

  return (
    <>
      <div className='app backgroundImage flex justify-center'>      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tarots' element={<TarotPage/>}/>
          <Route path='/tarots/:number' element={<SingleTarot/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
