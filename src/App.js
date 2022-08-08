import Menubar from './components/Menubar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('James')
  return (
    <>
      <Menubar />
      <Main name={name} />
      <Footer />
    </>
  )
}

export default App
