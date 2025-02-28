import { useState } from 'react'
import './App.css'
import Home from "./pages/Home.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="background">
      <Home/>
    </div>
  )
}

export default App
