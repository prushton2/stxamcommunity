import { useState } from 'react'
import steamLogo from '/steam2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a>
        <img src={steamLogo}/>
      </a>
    </>
  )
}

export default App
