import { useState } from 'react'
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import NavBar from './components/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <AboutMe/>
    </>
  )
}

export default App
