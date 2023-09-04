import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainDiv'>
      <div className='container'>
    <span className='spanOut'>{count}</span>
    <div className='Buttons'>
      <div>
        <button className="buttons" onClick={() => setCount((count) => count + 1)}>increase
        </button>
      </div>
      <div >
        <button className="buttons" onClick={() => setCount((count) => count - 1)}>Decrease
        </button>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
