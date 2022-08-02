import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1 class="text-3xl bg-black text-red-800 ">
          Hello world!
        </h1>
    </div>
  )
}

export default App
