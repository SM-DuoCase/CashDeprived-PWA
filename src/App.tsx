import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar'
import Bottombar from './components/Bottombar'
import BlackjackScreen from './components/BlackjackScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Topbar />
      <Routes>
        {<Route path='/' element={<BlackjackScreen />} /> }
        {/* <Route path='/startup' exact element={<Home />} /> */}
      </Routes>
      <Bottombar />
    </Router>

  )
}

export default App
