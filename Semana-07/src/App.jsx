import { useState } from 'react'
import './App.css'
import NewsAPI from './components/NewsAPI'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contador</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
      <br />
      <hr />
      <br />
      <NewsAPI></NewsAPI>
      <br />
      <hr />
      <br />
      <Input></Input>
    </>
  )
}

export default App
