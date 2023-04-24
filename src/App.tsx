import { useState } from 'react'
import './index.css'
import Topbar from './components/topbar'
import Bottombar from './components/Bottombar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Topbar />
      <Bottombar />
    </div>
  )
}

export default App
