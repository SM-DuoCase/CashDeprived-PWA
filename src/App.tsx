import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar'
import Bottombar from './components/Bottombar'
import StartScreenContent from './components/StartScreen';
import Menu from './components/Menu';
import BlackjackScreen from './components/BlackjackScreen';

function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <div className=''>
        <Topbar />
        <Routes>
          <Route path='/' element={<StartScreenContent />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/blackjack' element={<BlackjackScreen />} />
        </Routes>
        <Bottombar />
      </div>

    </Router>


  )
}

export default App
