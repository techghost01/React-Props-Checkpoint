import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Person from './components/profile/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Person fullName='Regal' bio='I am  MERN stack Developer' profession='Software Engineer'/>
    </div>
  )
}

export default App

