import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<div className="text-center py-8">Página não encontrada</div>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
