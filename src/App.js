import Menubar from './components/Menubar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('James')
  return (
    <>
      <Menubar name={name} setName={setName} />
      <Main name={name} />
      <Footer />
    </>
  )
}

export default App
