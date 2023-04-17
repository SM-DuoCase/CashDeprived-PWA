import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='font-semibold text-7xl'>Hello, World!</h1>
    </div>
  )
}

export default App
