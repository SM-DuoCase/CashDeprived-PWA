import { useState } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar'
import Bottombar from './components/Bottombar'
import StartScreenContent from './components/StartScreen';
import Menu from './components/Menu';
import BlackjackScreen from './components/BlackjackScreen';
import LossesScreen from './components/LossesScreen';

function App() {
  const [count, setCount] = useState(0)
  

  return (

      <div className=''>
        <Topbar />
        <Routes>
          <Route path='/' element={<StartScreenContent />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/losses' element={<LossesScreen />} />
          <Route path='/blackjack' element={<BlackjackScreen />} />
        </Routes>
        <Bottombar />
      </div>

  )
}

export default App
