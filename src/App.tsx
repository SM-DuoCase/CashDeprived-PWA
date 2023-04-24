import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import Topbar from './components/Topbar'
import Bottombar from './components/Bottombar'
import StartScreenContent from './components/StartScreenContent';

function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <div className=''>
        <Topbar />
        <Routes>
          <Route path='/' element={<StartScreenContent />} />
          {/* <Route path='/startup' exact element={<Home />} /> */}
        </Routes>
        <Bottombar />
      </div>
    </Router>


  )
}

export default App
